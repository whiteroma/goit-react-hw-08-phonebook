// import { createPortal } from 'react-dom';
import React from 'react';
import { Box } from '@mui/material';
import { Modal } from '@mui/material';
import { useToggleModal } from 'hooks/useToggleModal';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

// const modalRoot = document.querySelector('#modal-root');

export default function ModalWindow({ onClose, children }) {
  const { open } = useToggleModal();

  useEffect(() => {
    const handleKeyDown = e => {
      console.log('handleKeyDown');
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <>
      <Modal open={open} onCLose={onClose}>
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
          {children}
        </Box>
      </Modal>
      <Outlet />
    </>
    // modalRoot
  );
}
