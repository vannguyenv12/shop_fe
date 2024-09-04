import React, { useState } from 'react';
import SignUp from '../components/SignUp';
import Toast from '@/components/Toast';
import { SnackbarCloseReason } from '@mui/material';

function SignUpPage() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <SignUp handleClick={handleClick} />
      <Toast open={open} handleClick={handleClick} handleClose={handleClose} />
    </>
  );
}

export default SignUpPage;
