import { createPortal } from 'react-dom';
import React from 'react';
import { Box } from '@mui/material';
import { Modal } from '@mui/material';
import { useToggleModal } from 'hooks/useToggleModal';
import { Outlet } from 'react-router-dom';
import UpdateForm from 'components/UpdateForm/UpdateForm';

const modalRoot = document.querySelector('#modal-root');

export default function ModalWindow() {
  const { open, toggle } = useToggleModal();
  return createPortal(
    <>
      <Modal open={open} onClose={toggle}>
        <Box>
          <UpdateForm />
        </Box>
      </Modal>
      <Outlet />
    </>,
    modalRoot
  );
}
