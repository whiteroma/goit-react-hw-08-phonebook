import { Outlet} from 'react-router-dom';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useSignUpUserMutation } from 'UserApi/userApi';
import { FormContainer } from './Register.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Login length should not be less than 2!')
    .max(50, 'Login length should not be less than 50!')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password length should not be less than 6!')
    .max(50, 'Password length should not be less than 50!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default function Login() {
  const [signUpUser] =
    useSignUpUserMutation();
  console.log('loginUser', signUpUser);
//   const { data } = useGetUserQuery();
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
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
          <Field type="text" name="name" required></Field>
          <Field type="text" name="email" required></Field>
          <Field type="text" name="password" required></Field>
          <button type="submit">Log In</button>
        </FormContainer>
      </Formik>
      <Outlet />
    </>
  );
}
