import { Outlet } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSignUpUserMutation } from 'UserApi/userApi';
import { FormContainer } from './Register.styled';
import React from 'react';import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { CircularProgress } from '@mui/material';

// const initialValues = {
//   name: '',
//   email: '',
//   password: '',
// };

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Username length should not be less than 2!')
    .max(50, 'Username length should not be less than 50!')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Password length should not be less than 6!')
    .max(50, 'Password length should not be less than 50!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default function Register() {
  const [signUpUser, {isLoading}] = useSignUpUserMutation();
  const [showPassword, setShowPassword] = useState();
  // console.log("signUpUser", signUpUser());
    // const { data } = useGetUserQuery();
  // const handleSubmit = (values, { resetForm }) => {
  //   signUpUser(values);
  //   resetForm();
  // };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await signUpUser(values);
      resetForm();
    }
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    // <>
    //   <Formik
    //     initialValues={initialValues}
    //     onSubmit={handleSubmit}
    //     validationSchema={validationSchema}
    //   >
    //     <FormContainer>
    //       <label htmlFor="name">
    //         Username
    //         <Field type="text" name="name" required></Field>
    //       </label>
    //       <label htmlFor="email">
    //         Email
    //         <Field type="email" name="email" required></Field>
    //       </label>
    //       <label htmlFor="password">
    //         Password
    //         <Field type="password" name="password" required></Field>
    //       </label>
    //       <button type="submit">Sign Up</button>
    //     </FormContainer>
    //   </Formik>
    //   <Outlet />

      
    <>
      <FormContainer onSubmit={formik.handleSubmit}>
        
      <FormControl sx={{ m: 1, width: '30ch' }} variant="standard">
          <InputLabel htmlFor="name">Username</InputLabel>
          <Input
            id="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '30ch' }} variant="standard">
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '30ch' }} variant="standard">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            size="large"
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={formik.values.password}
            onChange={formik.handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <LoadingButton
            size="large"
            type="submit"
            loading={isLoading}
            loadingPosition="center"
            loadingIndicator={<CircularProgress color="primary" size={24} />}
          >
            Sign Up
          </LoadingButton>
        </FormControl>
      </FormContainer>
      <Outlet />
    </>
  );
}
