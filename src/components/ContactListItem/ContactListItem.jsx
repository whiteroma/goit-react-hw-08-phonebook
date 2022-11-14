import { Oval } from 'react-loader-spinner';
// import { ListItem, ListSpan, ListButton } from './ContactListItem.styled';
import { useDeleteContactMutation } from 'ContactsApi/contactsApi';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import ListItemButton from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { useState } from 'react';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LoadingButton from '@mui/lab/LoadingButton';
import { CircularProgress } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function ContactListItem({ id, name, number }) {
  const [deleteContact, { isLoading, isSuccess, isError }] =
    useDeleteContactMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.warning(`${name} removed from your contacts`);
    }

    if (isError) {
      toast.error(isError.data);
    }
  }, [isError, isSuccess, name]);

  // <ListItem onClick={() => setSecondary(true)} key={id}
  //                   secondaryAction={
  //                     <IconButton edge="end" onClick={() => deleteContact(id)}>
  //                       <DeleteIcon />
  //                     </IconButton>
  //                   }
  //                 >
  //                   <ListItemAvatar>
  //                     <Avatar>
  //                       <CgProfile />
  //                     </Avatar>
  //                   </ListItemAvatar>
  //                   <ListItemText
  //                     primary="Single-line item"
  //                     secondary={secondary ? '{number}' : null}
  //                   />
  //                 </ListItem>,

  // onClick={() => setSecondary(true)}

  return (
    <>
      <ListItemButton key={id}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'inherit' }}>
            <ContactPhoneIcon color="primary" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={ number }
        />
        <LoadingButton
          size="small"
          onClick={() => console.log(id)}
          loading={isLoading}
          loadingPosition="center"
          loadingIndicator={<CircularProgress color="primary" size={16} />}
        ><EditIcon />
        </LoadingButton>
          <LoadingButton
          size="small"
          onClick={() => deleteContact(id)}
          loading={isLoading}
          loadingPosition="center"
          loadingIndicator={<CircularProgress color="primary" size={16} />}
        ><DeleteIcon />
        </LoadingButton>
        
        <Outlet />
      </ListItemButton>
    </>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
