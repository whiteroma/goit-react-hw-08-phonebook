import { useSelector } from 'react-redux';
import { React } from 'react';
// import { List } from './ContactList.styled';
import { List } from '@mui/material';
import { useFetchContactsQuery } from 'ContactsApi/contactsApi';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { Outlet } from 'react-router-dom';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function ContactList() {
  const filter = useSelector(state => state.contacts.filter);
  const { data } = useFetchContactsQuery();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}
      >
        <Filter />
        <IconButton
          aria-label="delete"
          onClick={handleClickOpen}
          sx={{ fontSize: 45, '&:hover': { bacgroundColor: '#1976d2ed' } }}
          color="primary"
        >
          <PersonAddIcon fontSize="inherit" />
        </IconButton>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Create contact</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To create new contact please enter the name and the phone number
              in corresponding field below then click "Add".
            </DialogContentText>
            <ContactForm handleClose={handleClose} />
          </DialogContent>
        </Dialog>
      </Box>
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

      <Outlet />
    </>
  );
}