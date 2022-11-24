import { React } from 'react';
import { FormContainer } from 'components/ContactForm/ContactForm.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  useFetchContactsQuery,
  useUpdateContactMutation,
} from 'ContactsApi/contactsApi';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import LoadingButton from '@mui/lab/LoadingButton';
import { CircularProgress } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import FormHelperText from '@mui/material/FormHelperText';
import { Button } from '@mui/material';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter a name'),
  number: Yup.string().required('Please enter a number'),
});

const UpdateForm = ({ handleClose, id, name, number }) => {
  const [updateContact, { isLoading, isError, isSuccess }] =
    useUpdateContactMutation();
  const { data } = useFetchContactsQuery();

  const formik = useFormik({
    initialValues: {
      name: name,
      number: number,
    },
    validate: values => {
      const errors = {};
      const numberPattern = /^[0-9\b\s+().*-\s++]+$/;
      const namePattern =
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
      if (!values.number) {
        errors.number = 'Required';
      } else if (!numberPattern.test(values.number)) {
        errors.number =
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
      } else if (!values.name) {
        errors.name = 'Required';
      } else if (!namePattern.test(values.name)) {
        errors.name =
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
      }

      return errors;
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const addedName = data
        .map(contact => contact.name.toLowerCase())
        .includes(values.name.toLowerCase());
      if (addedName) {
        return toast.error(
          `${values.name} or ${values.number} is already in a list`
        );
      } else {
        await updateContact({ ...values });
        resetForm();
        handleClose();
      }
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success('Contact successfully updated');
    }

    if (isError) {
      toast.error(isError.data);
    }
  }, [isSuccess, isError]);

  return (
    <>
      <Typography variant="h6" component="h2">
        Update contact
      </Typography>
      <Typography sx={{ mt: 2, color: 'rgba(0, 0, 0, 0.6)' }}>
        To update contact please enter new name or phone number below and click
        "Update contact".
      </Typography>
      <FormContainer onSubmit={formik.handleSubmit}>
        <FormControl
          error={formik.errors.name}
          sx={{ m: 1, width: '30ch' }}
          variant="standard"
        >
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            required
            id="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && (
            <FormHelperText color="red">{formik.errors.name}</FormHelperText>
          )}
        </FormControl>

        <FormControl
          error={formik.errors.number}
          sx={{ m: 1, width: '30ch' }}
          variant="standard"
        >
          <InputLabel htmlFor="number">Number</InputLabel>
          <Input
            // inputProps={{ inputMode: "numeric", pattern: "[0-9]*"}}
            id="number"
            type="text"
            value={formik.values.number}
            onChange={formik.handleChange}
            required
          />
          {formik.errors.number && (
            <FormHelperText color="red">{formik.errors.number}</FormHelperText>
          )}

          <ButtonGroup fullWidth sx={{ mt: 3 }}>
            <LoadingButton
              sx={{ mr: 0.3 }}
              variant="contained"
              size="large"
              type="submit"
              loading={isLoading}
              loadingPosition="center"
              loadingIndicator={<CircularProgress color="primary" size={24} />}
            >
              Update
            </LoadingButton>
            <Button
              variant="contained"
              size="large"
              type="button"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </ButtonGroup>
        </FormControl>
      </FormContainer>
      <Outlet />
    </>
  );
};

export default UpdateForm;
