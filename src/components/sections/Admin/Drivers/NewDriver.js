import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Snackbar, Grid } from '@mui/material';
import axios from 'axios';
import { urlApi } from '../../../../Backend/apiUrl';
import { useNavigate } from 'react-router-dom';

const NewDriver = () => {
  const token = localStorage.getItem('token')
  const adminId = localStorage.getItem('userId')
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    password: '',
    cni: '',
    phone: '',
    photo: '',
    dateNaissance: '',
    planLocalisation: '',
    ville: '',
    quartier: '',
    pays: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(urlApi+`chauffeur/create/`+adminId, formData, {
        headers: {
          'Content-Type': 'application/json',
          'token': token // Remplacez par votre jeton d'authentification
        }
      });
        console.log(response.data)
        setSnackbarMessage('compte du chauffeur créé avec succès.');
        navigate('/admin/mes-chauffeurs')
    } catch (error) {
      setSnackbarMessage('Erreur lors de la création du chauffeur.');
      console.log(error)
    }

    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>Création d'un chauffeur</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField name="nom" label="Nom" fullWidth value={formData.nom} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="email" label="Email" type="email" fullWidth value={formData.email} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="password" label="Mot de passe" type="password" fullWidth value={formData.password} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="cni" label="CNI" fullWidth value={formData.cni} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="phone" label="Téléphone" fullWidth value={formData.phone} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="photo" label="Photo" fullWidth value={formData.photo} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="dateNaissance" label="Date de naissance" type="date" fullWidth value={formData.dateNaissance} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="planLocalisation" label="Plan de localisation" fullWidth value={formData.planLocalisation} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="ville" label="Ville" fullWidth value={formData.ville} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="quartier" label="Quartier" fullWidth value={formData.quartier} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="pays" label="Pays" fullWidth value={formData.pays} onChange={handleChange} />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth>Créer le chauffeur</Button>
      </form>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} message={snackbarMessage} />
    </Container>
  );
};

export default NewDriver;
