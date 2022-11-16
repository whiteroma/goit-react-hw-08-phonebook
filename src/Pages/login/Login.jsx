import { Outlet } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLogInUserMutation } from 'UserApi/userApi';
import { FormContainer } from './Login.styled';
import { redirect } from 'react-router-dom';
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
  password: Yup.string()
    .min(5, 'Password length should not be less than 6!')
    .max(50, 'Password length should not be less than 50!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default function Login() {
  const [logInUser, { isLoading }] = useLogInUserMutation();
  const [showPassword, setShowPassword] = useState();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await logInUser(values);
      redirect('/contacts');
      resetForm();
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    console.log('showPassword', showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <>
      <FormContainer onSubmit={formik.handleSubmit}>
        <FormControl
          error={formik.values.email === ''}
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
          {formik.values.email === '' && (
            <FormHelperText color="red">{formik.errors.email}</FormHelperText>
          )}
        </FormControl>

        <FormControl
          error={formik.values.password === ''}
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
          {formik.values.password === '' && (
            <FormHelperText color="red">{formik.errors.password}</FormHelperText>
          )}
          <LoadingButton
            size="large"
            type="submit"
            loading={isLoading}
            loadingPosition="center"
            loadingIndicator={<CircularProgress color="primary" size={24} />}
          >
            Log in
          </LoadingButton>{' '}
        </FormControl>
      </FormContainer>
      <Outlet />
    </>
  );
}
