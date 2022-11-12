import { useSelector } from 'react-redux';
import { React } from 'react';
import { List } from './ContactList.styled';
import { useFetchContactsQuery } from 'ContactsApi/contactsApi';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { Outlet } from 'react-router-dom';
import { StyledLink } from 'components/Layout/Layout.styled';

export default function ContactList() {
  const filter = useSelector(state => state.contacts.filter);
  const { data } = useFetchContactsQuery();

  return (
    <>
      <List>
        {data &&
          data
            .filter(
              contact =>
                contact.name.toLowerCase().includes(filter.toLowerCase()) ||
                contact.phone.includes(filter)
            )
            .map(({ name, phone, id }) => (
              <ContactListItem name={name} phone={phone} key={id} id={id} />
            ))}
      </List>
      <StyledLink to="/contacts/add">+</StyledLink>
      <Outlet/>
    </>
  );
}