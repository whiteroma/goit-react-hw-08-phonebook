import React from 'react';
import { Modal } from '@mui/material';
import { useToggleModal } from 'hooks/useToggleModal';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

export default function ModalWindow({ onClose, children }) {
  const { open } = useToggleModal();
  
  return (
    <>
      <Modal disableEscapeKeyDown open={open} onCLose={onClose}>
        {children}
      </Modal>
      <Outlet />
    </>
  );
}
