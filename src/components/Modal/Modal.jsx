import { createPortal } from 'react-dom';
import React from 'react';
import { Box } from '@mui/material';
import { Modal } from '@mui/material';
import { useToggleModal } from 'hooks/useToggleModal';
import { Outlet } from 'react-router-dom';  
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

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

  // const handleOverlayClick = e => {
  //   if (e.target !== e.currentTarget) {
  //     console.log('handleOverlayClick');
  //     onClose();
  //   }
  // };

  return createPortal(
    <>
      <Modal open={open} onCLose={onClose}>
        <Box>
          {children}
        </Box>
      </Modal>
      <Outlet />
    </>,
    modalRoot
  );
}
