import { Container } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';
import { useSelector } from 'react-redux';

const Register = lazy(() => import('Pages/register/Register'));
const ContactList = lazy(() => import('./ContactList/ContactList'));
const Login = lazy(() => import('Pages/login/Login'));
const PrivateRoute = lazy(() => import('./UserMenu/PrivateRoute'));
const PublicRoute = lazy(() => import('./UserMenu/PublicRoute'));
const Home = lazy(() => import('Pages/home/Home'));

export default function App() {
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  return (
    !isRefreshing && (
      <Container>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactList />
                </PrivateRoute>
              }
            ></Route>

            <Route path="/" element={<PublicRoute restricted />}>
              <Route path="signup" element={<Register />}></Route>
              <Route path="login" element={<Login />}></Route>
            </Route>
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Route>
        </Routes>
      </Container>
    )
  );
}
