import { Outlet } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSignUpUserMutation } from 'UserApi/userApi';
import { FormContainer, StyledLink } from './Register.styled';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { CircularProgress } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';

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
  const [signUpUser, { isLoading }] = useSignUpUserMutation();
  const [showPassword, setShowPassword] = useState();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validate: values => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Field is required';
      } else if (!values.email) {
        errors.email = 'Field is required';
      } else if (!values.password) {
        errors.password = 'Field is required';
      }
      return errors;
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await signUpUser(values);
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <>
      <FormContainer onSubmit={formik.handleSubmit}>
        <FormControl
          error={formik.errors.name}
          sx={{ m: 1, width: '30ch' }}
          variant="standard"
        >
          <InputLabel htmlFor="name">Username</InputLabel>
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
          error={formik.errors.email}
          sx={{ m: 1, width: '30ch' }}
          variant="standard"
        >
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            required
            id="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && (
            <FormHelperText color="red">{formik.errors.email}</FormHelperText>
          )}
        </FormControl>

        <FormControl
          error={formik.errors.password}
          sx={{ m: 1, width: '30ch' }}
          variant="standard"
        >
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            required
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
          {formik.errors.password && (
            <FormHelperText color="red">
              {formik.errors.password}
            </FormHelperText>
          )}
          <LoadingButton
            variant="contained"
            sx={{ mt: 2 }}
            size="large"
            type="submit"
            loading={isLoading}
            loadingPosition="center"
            loadingIndicator={<CircularProgress color="primary" size={24} />}
          >
            Sign Up
          </LoadingButton>
          <StyledLink to="/login">
            Already have an account? Click to log in
          </StyledLink>
        </FormControl>
      </FormContainer>
      <Outlet />
    </>
  );
}
