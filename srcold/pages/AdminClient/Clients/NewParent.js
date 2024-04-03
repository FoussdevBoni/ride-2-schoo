import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Snackbar, Grid, CircularProgress } from '@mui/material';
import axios from 'axios';
import { urlApi } from '../../../Backend/apiUrl';

const CreateParentForm = () => {
  const [submitting , setSubmitting ]=useState(false)
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    password: '',
    cni: '',
    phone: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     setSubmitting(true)
    try {
      const response = await axios.post(urlApi+'parent/create', formData);
      
        setSnackbarMessage('Compte créé avec succès.');
             setSubmitting(false)

        console.log(response.data)
     
    } catch (error) {
      setSnackbarMessage('Erreur lors de la création du parent.');
       setSubmitting(false)
       console.log(error)

    }

    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>Créer un compte parent</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField name="nom" label="Nom" fullWidth margin="normal" value={formData.nom} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={6} >
            <TextField name="email" label="Email" type="email" fullWidth margin="normal" value={formData.email} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={6} >
            <TextField name="password" label="Mot de passe" type="password" fullWidth margin="normal" value={formData.password} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField name="cni" label="CNI" fullWidth margin="normal" value={formData.cni} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField name="phone" label="Téléphone" fullWidth margin="normal" value={formData.phone} onChange={handleChange} />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth>

          {
            submitting ? <CircularProgress style={{color: 'white'}}/>: 'Enregistrer'
          }
        </Button>
      </form>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} message={snackbarMessage} />
    </Container>
  );
};

export default CreateParentForm;
