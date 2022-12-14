import { useDeleteContactMutation } from 'ContactsApi/contactsApi';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LoadingButton from '@mui/lab/LoadingButton';
import EditIcon from '@mui/icons-material/Edit';
import UpdateForm from 'components/UpdateForm/UpdateForm';
import { Box, Button, Modal, CircularProgress } from '@mui/material';

export default function ContactListItem({ id, name, number }) {
  const [deleteContact, { isLoading, isSuccess, isError }] =
    useDeleteContactMutation();
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(open => !open);

  const handleClose = (_, reason) => {
    if (reason && reason === 'backdropClick') return;
    toggle();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.warning(`${name} removed from your contacts`);
    }

    if (isError) {
      toast.error(isError.data);
    }
  }, [isError, isSuccess, name]);

  return (
    <>
      <ListItem key={id}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'inherit' }}>
            <ContactPhoneIcon color="primary" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={number} />
        <Button size="small" onClick={toggle}>
          <EditIcon />
        </Button>
        <LoadingButton
          size="small"
          onClick={() => deleteContact(id)}
          loading={isLoading}
          loadingPosition="center"
          loadingIndicator={<CircularProgress color="primary" size={16} />}
        >
          <DeleteIcon />
        </LoadingButton>

        {open && (
          <Modal disableEscapeKeyDown open={open} onClose={handleClose}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
              }}
            >
              <UpdateForm
                handleClose={toggle}
                id={id}
                name={name}
                number={number}
              />
              <Outlet />
            </Box>
          </Modal>
        )}

        <Outlet />
      </ListItem>
    </>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
