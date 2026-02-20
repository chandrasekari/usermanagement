import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editUser } from '../redux/userSlice';
import { TextField, Button, Box ,Snackbar,Alert} from '@mui/material';

function EditUser() {
  const { id } = useParams(); // get id from URL
  const navigate = useNavigate();
  
    const [openSnackbar, setOpenSnackbar] = useState(false);
  
  const users = useSelector(state => state.users);
  const user = users.find(u => u.id.toString() === id);

  const [name, setName] = useState(user ? user.name : '');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(editUser({ id: user.id, name }));
   setOpenSnackbar(true); // show success alerts

   setTimeout(() => {
     navigate('/manage');
   }, 1000);
    // redirect back after saving
  };

  if (!user) {
    return <Box sx={{ p: 2 }}>User not found</Box>;
  }

  return (
    <>
    <Box sx={{ p: 2 }}>
      <TextField
        label="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit} sx={{ ml: 2 }}>
        Save
      </Button>
    </Box>

   <Snackbar
           open={openSnackbar}
           autoHideDuration={3000}
           onClose={() => setOpenSnackbar(false)}
         >
           <Alert severity="success" sx={{ width: '100%' }}>
             User updated successfully!
           </Alert>
         </Snackbar>
          </>
  );
 
}

export default EditUser;