import { React } from 'react';
import { FormContainer } from './ContactForm.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'ContactsApi/contactsApi';
import { Oval } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { useState } from 'react';

const initialValues = {
  name: '',
  number: '',
};
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter a name'),
  number: Yup.string().required('Please enter a number'),
});

const ContactForm = ({ handleClose }) => {
  const [addContact, { isLoading, isError, isSuccess }] =
    useAddContactMutation();
  const { data } = useFetchContactsQuery();

  const handleSubmit = async (values, { resetForm }) => {
    const addedName = data
      .map(contact => contact.name.toLowerCase())
      .includes(values.name.toLowerCase());
    if (addedName) {
      return toast.error(`${values.name} is already in a list`);
    } else {
      await addContact({ ...values });
      resetForm();
      handleClose();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Contact successfully added');
    }

    if (isError) {
      toast.error(isError.data);
    }
  }, [isSuccess, isError]);

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormContainer>
          <label>
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" />
          </label>
          <label>
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and should start with +"
              required
            />
            <ErrorMessage name="number" />
          </label>
         
          {isLoading ? (
            <Oval
              height={40}
              width={40}
              color="blue"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="blue"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          ) : (
            <DialogActions>
              <Button type="submit" onSubmit={handleSubmit}>
                Add
              </Button>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          )}
        </FormContainer>
      </Formik>
      <Outlet />
    </>
  );
};

export default ContactForm;


// <div>
//         <TextField
//           label="With normal TextField"
//           id="standard-start-adornment"
//           sx={{ m: 1, width: '25ch' }}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">kg</InputAdornment>,
//           }}
//           variant="standard"
//         />
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
//           <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
//           <Input
//             id="standard-adornment-password"
//             type={values.showPassword ? 'text' : 'password'}
//             value={values.password}
//             onChange={handleChange('password')}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                 >
//                   {values.showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>
//       </div>