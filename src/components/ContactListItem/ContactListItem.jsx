// import { Oval } from 'react-loader-spinner';
// import { ListItem, ListSpan, ListButton } from './ContactListItem.styled';
import { useDeleteContactMutation } from 'ContactsApi/contactsApi';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
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
import { CircularProgress } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useToggleModal } from 'hooks/useToggleModal';
import ModalWindow from 'components/Modal/Modal';
import UpdateForm from 'components/UpdateForm/UpdateForm';

export default function ContactListItem({ id, name, number }) {
  const [deleteContact, { isLoading, isSuccess, isError }] =
    useDeleteContactMutation();
  
    const { open, toggle } = useToggleModal();
    
    const handleOpen = () => {
      toggle();
    }

  useEffect(() => {
    if (isSuccess) {
      toast.warning(`${name} removed from your contacts`);
    }

    if (isError) {
      toast.error(isError.data);
    }
  }, [isError, isSuccess, name]);


  console.log("showModal", open);
  return (
    <>
      <ListItem key={id}>
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
          onClick={handleOpen}
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

        {open && <ModalWindow><UpdateForm/></ModalWindow>}
        
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
