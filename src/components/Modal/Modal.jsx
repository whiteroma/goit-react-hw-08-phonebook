import React from 'react';
import { Box } from '@mui/material';
import { Modal } from '@mui/material';
import { useToggleModal } from 'hooks/useToggleModal';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

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
          {children}
      </Modal>
      <Outlet />
    </>
  );
}
