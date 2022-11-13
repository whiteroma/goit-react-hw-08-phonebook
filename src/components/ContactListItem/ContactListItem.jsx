import { Oval } from 'react-loader-spinner';
import { ListItem, ListSpan, ListButton } from './ContactListItem.styled';
import { useDeleteContactMutation } from 'ContactsApi/contactsApi';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ContactListItem({ id, name, number }) {
  const [deleteContact, { isLoading, isSuccess, isError }] = useDeleteContactMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.warning(`${name} removed from your contacts`);
    }

    if (isError) {
      toast.error(isError.data);
    }
  }, [isError, isSuccess, name])

  return (
    <ListItem key={id}>
      <ListSpan>{name}:</ListSpan>
      {number}
      {isLoading ? (
        <Oval
          height={12}
          width={12}
          color="blue"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="blue"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      ) : (
        <ListButton onClick={() => deleteContact(id)}>Delete</ListButton>
      )}
    </ListItem>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};