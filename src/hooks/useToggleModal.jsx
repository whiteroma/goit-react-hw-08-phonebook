import { useState } from "react";

export const useToggleModal = () => {
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const close = () => setOpen(false);
    const toggle = () => setOpen(open => !open);
  
    return { open, openModal, close, toggle };
  };