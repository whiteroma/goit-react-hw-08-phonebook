import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import { Container } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, Navigate } from 'react-router-dom';
// import { lazy } from 'react';
import Layout from './Layout/Layout';
import Register from 'Pages/register/Register';
import Login from 'Pages/login/Login';

export default function App() {
  return (
    <Container>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='contacts' element={<ContactList/>}>
            <Route path='add' element={<ContactForm/>}></Route>
          </Route>
          <Route path="register" element={<Register />}></Route>
          <Route path='login' element ={<Login/>}></Route>
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      {/* <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList /> */}
    </Container>
  );
}
