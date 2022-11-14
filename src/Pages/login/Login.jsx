import { Outlet } from 'react-router-dom';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useLogInUserMutation } from 'UserApi/userApi';
import { FormContainer } from './Login.styled';
import { redirect } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';
// import { setCredentials } from 'redux/authSlice';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, 'Password length should not be less than 6!')
    .max(50, 'Password length should not be less than 50!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default function Login() {
    const [logInUser] = useLogInUserMutation();
  const handleSubmit = (values, { resetForm }) => {
    console.log("values", values);
    logInUser(values);
    redirect('/contacts')
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormContainer>
          <label htmlFor="email">
            Email
          <Field type="email" name="email" required></Field></label>
          <label htmlFor="password">
            Password
          <Field type="password" name="password" required></Field></label>
          <button type="submit">Log In</button>
        </FormContainer>
      </Formik>
      <Outlet />
    </>
  );
}
