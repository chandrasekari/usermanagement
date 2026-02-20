import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';
import { TextField, Button, Box, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const [name, setName] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name.trim()) {
      dispatch(addUser({ id: Date.now(), name }));
      setOpenSnackbar(true); // show success alert

      // Redirect after short delay so Snackbar is visible
      setTimeout(() => {
        navigate('/manage');
      }, 500);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <TextField
        label="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit} sx={{ ml: 2 }}>
        Add
      </Button>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          User added successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default AddUser;
