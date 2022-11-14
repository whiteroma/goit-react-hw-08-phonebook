import ContactList from './ContactList/ContactList';
import { Container } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, Navigate } from 'react-router-dom';
// import { lazy } from 'react';
import Layout from './Layout/Layout';
import Register from 'Pages/register/Register';
import Login from 'Pages/login/Login';
import PrivateRoute from './UserMenu/PrivateRoute';
import PublicRoute from './UserMenu/PublicRoute';
import { useSelector } from 'react-redux';

export default function App() {
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  return (
    !isRefreshing && (
      <Container>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactList />
                </PrivateRoute>
              }
            ></Route>

            <Route path="/" element={<PublicRoute restricted />}>
              <Route path="register" element={<Register />}></Route>
              <Route path="login" element={<Login />}></Route>
            </Route>
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Route>
        </Routes>
        {/* <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList /> */}
      </Container>
    )
  );
}
