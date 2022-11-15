import { React } from 'react';
import { FormContainer } from 'components/ContactForm/ContactForm.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useUpdateContactMutation } from 'ContactsApi/contactsApi';
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

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter a name'),
  number: Yup.string().required('Please enter a number'),
});

const UpdateForm = ({ handleClose, id, name, number }) => {
  const [updateContact, { isLoading, isError, isSuccess }] =
    useUpdateContactMutation();

  const formik = useFormik({
    initialValues: {
      name: name,
      number: number,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await updateContact({ values, id });
      resetForm();
      handleClose();
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
      <Typography sx={{ mt: 2 }}>
      To update contact please enter new name or phone number below and click "Update contact".
          </Typography>
      <FormContainer onSubmit={formik.handleSubmit}>
        <FormControl sx={{ m: 1, width: '30ch' }} variant="standard">
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            id="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '30ch' }} variant="standard">
          <InputLabel htmlFor="number">Number</InputLabel>
          <Input
            id="number"
            type="text"
            value={formik.values.number}
            onChange={formik.handleChange}
          />
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
            <LoadingButton
              variant="contained"
              size="large"
              type="button"
              onClick={handleClose}
              loading={isLoading}
              loadingPosition="center"
              loadingIndicator={<CircularProgress color="primary" size={24} />}
            >
              Cancel
            </LoadingButton>
          </ButtonGroup>
        </FormControl>
      </FormContainer>
      <Outlet />
    </>
  );
};

export default UpdateForm;
