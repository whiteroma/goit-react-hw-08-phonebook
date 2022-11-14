import { useSelector } from 'react-redux';
import { React, useState } from 'react';
// import { List } from './ContactList.styled';
import { List } from '@mui/material';
import { useFetchContactsQuery } from 'ContactsApi/contactsApi';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { Outlet } from 'react-router-dom';
import { StyledLink } from 'components/Layout/Layout.styled';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import Box from '@mui/material/Box';

export default function ContactList() {
  const filter = useSelector(state => state.contacts.filter);
  const { data } = useFetchContactsQuery();


  return (
    <>
    <Filter/>
    <Box sx={{ flexGrow: 1 }}>
<List>
        {data &&
          data
            .filter(
              contact =>
                contact.name.toLowerCase().includes(filter.toLowerCase()) ||
                contact.number.includes(filter)
            )
            .map(({ name, number, id }) => (
              <ContactListItem name={name} number={number} key={id} id={id} />
            ))}
      </List>
    </Box>
      <ContactForm/>
      <Outlet/>
    </>
  );
}
