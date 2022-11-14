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
import Button from '@mui/material/Button';
import { useState } from 'react';

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
    <Button variant="outlined" onClick={handleClickOpen}>
        Add contact
      </Button>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
      <ContactForm handleClose={handleClose}/>
        </DialogContent>
      </Dialog>
      <Outlet/>
    </>
  );
}
