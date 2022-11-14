import { Outlet } from 'react-router-dom';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useSignUpUserMutation } from 'UserApi/userApi';
import { FormContainer } from './Register.styled';
import React from 'react';

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
    .min(5, 'Password length should not be less than 6!')
    .max(50, 'Password length should not be less than 50!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default function Login() {
  const [signUpUser] = useSignUpUserMutation();
  // console.log("signUpUser", signUpUser());
  //   const { data } = useGetUserQuery();
  const handleSubmit = (values, { resetForm }) => {
    signUpUser(values);
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
          <label htmlFor="name">
            Username
          <Field type="text" name="name" required></Field></label>
          <label htmlFor="email">
            Email
          <Field type="email" name="email" required></Field></label>
          <label htmlFor="password">
            Password
          <Field type="password" name="password" required></Field></label>
          <button type="submit">Sign Up</button>
        </FormContainer>
      </Formik>
      <Outlet />
    </>
  );
}
