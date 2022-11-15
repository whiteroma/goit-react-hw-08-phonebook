import { React } from 'react';
import { FormContainer } from 'components/ContactForm/ContactForm.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  useUpdateContactMutation,
  useFetchContactsQuery,
} from 'ContactsApi/contactsApi';
import { Oval } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const initialValues = {
  name: '',
  number: '',
};
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter a name'),
  number: Yup.string().required('Please enter a number'),
});

const UpdateForm = () => {
  const [updateContact, { isLoading, isError, isSuccess }] =
    useUpdateContactMutation();
  const { data } = useFetchContactsQuery();

  const handleSubmit = async (values, { resetForm }) => {
    console.log('values', values);
    const addedName = data
      .map(contact => contact.name.toLowerCase())
      .includes(values.name.toLowerCase());
    if (addedName) {
      return toast.error(`${values.name} is already in a list`);
    } else {
      await updateContact({ ...values });
      resetForm();
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
            <button type="submit">Add contact</button>
          )}
        </FormContainer>
      </Formik>
      <Outlet />
    </>
  );
};

export default UpdateForm;
