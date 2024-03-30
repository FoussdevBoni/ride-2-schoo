import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Snackbar, Grid, CircularProgress } from '@mui/material';
import axios from 'axios';
import { urlApi } from '../../../Backend/apiUrl';

const AddChildForm = ({ parent }) => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    class: "",
    heureDepart: "",
    heureSortie: "",
    photo: "",
    abonnement: "",
    nomGerant: "",
    cniGerrant: "",
    photoGerant: "",
    photoArrierCni: "",
    photoAvantCni: "",
    email: "",
    ecole: ""
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
    setSubmitting(true);
    alert(parent._id)
    try {
      const response = await axios.post(urlApi + 'parent/addChild/' + parent?._id, formData);
      setSnackbarMessage('Enfant ajouté avec succès.');
      setSubmitting(false);
      console.log(response.data);
    } catch (error) {
      setSnackbarMessage("Erreur lors de l'ajout d'un enfant.");
      setSubmitting(false);
      console.log(error);
    }
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>Ajouter un enfant</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField name="nom" label="Nom de l'élève" fullWidth margin="normal" value={formData.nom} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField name="class" label="Classe" fullWidth margin="normal" value={formData.class} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField name="heureDepart" label="Heure de départ" fullWidth margin="normal" value={formData.heureDepart} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField name="heureSortie" label="Heure de sortie" fullWidth margin="normal" value={formData.heureSortie} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField name="photo" label="Photo" fullWidth margin="normal" value={formData.photo} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField name="abonnement" label="Abonnement" fullWidth margin="normal" value={formData.abonnement} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField name="nomGerant" label="Nom du gérant" fullWidth margin="normal" value={formData.nomGerant} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField name="cniGerrant" label="CNI du gérant" fullWidth margin="normal" value={formData.cniGerrant} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField name="photoGerant" label="Photo du gérant" fullWidth margin="normal" value={formData.photoGerant} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField name="photoArrierCni" label="Photo arrière CNI" fullWidth margin="normal" value={formData.photoArrierCni} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField name="photoAvantCni" label="Photo avant CNI" fullWidth margin="normal" value={formData.photoAvantCni} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField name="email" label="Email" type="email" fullWidth margin="normal" value={formData.email} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField name="ecole" label="École" fullWidth margin="normal" value={formData.ecole} onChange={handleChange} />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {submitting ? <CircularProgress style={{ color: 'white' }} /> : 'Enregistrer'}
        </Button>
      </form>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} message={snackbarMessage} />
    </Container>
  );
};

export default AddChildForm;
