import { Alert, Box, Button, CircularProgress, Snackbar, TextField, Typography, colors } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import axios from 'axios';
import { urlApi } from '../../../Backend/apiUrl';




function ClientAdminConnexion(props) {
    const navigate = useNavigate()
     const [email , setEmail] = useState('')
      const [password , setPassWord] = useState('')
      const [open , setOpen ] = useState(false)
       const apiUrl = "https://r2sbackend.onrender.com/";
      const [submitting , setSubmitting] = useState(false)
  // Définir les états pour les données de l'administrateur et les messages d'erreur
  const adminData = {
    email: email,
    password: password,
  
  };

  const [errorMessage, setErrorMessage] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async () => {
    setSubmitting(true)
    try {
      // Effectuer la requête POST avec Axios
      const response = await axios.post(urlApi + "admin/login", adminData);
      console.log("Success:", response.data);
      localStorage.setItem("userId", response.data._id)
     localStorage.setItem("role", response.data.role)
          navigate('/admin-client?admin_id='+response.data._id)

      setSubmitting(false)
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
              setSubmitting(false)
      } else {
        setErrorMessage(error.message);
      }
      console.error("Error:", errorMessage);
    }
  };
  const handleClose = ()=>{
  setOpen(false)
}

useEffect(()=>{

},[])
   
    return (
        <Box>
            <Typography variant='div' component={'h1'} sx={{textAlign:'center'}}>
                Se connecter en tant qu'école
            </Typography>
            <br /><br/>
           <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
           <TextField id="outlined-basic" label="Adresse email" variant="outlined" 
           type='email'
           onChange={(e)=>{
            setEmail(e.target.value)
           }}
           value={email}
           />
           </Box>
           <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
           <TextField id="outlined-basic" label="Votre mot de passe" variant="outlined" 
           value={password}
           onChange={(e)=>{setPassWord(e.target.value)}}
           type='password'
           />
           </Box> 
        

             <br /><br/>
           <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
         <Button color='primary' sx={{ flex: 1, marginRight: '0.5rem'}}  variant='contained'
           onClick={()=>{
             if (submitting===false) {
                 handleSubmit()
             }
           }}
          >
          {
            submitting ? <CircularProgress  sx={{color: 'white'}}/>: 'Continuer'
          }
          </Button>
          <Button sx={{ flex: 1, marginLeft: '0.5rem' }} color='primary' variant='outlined'
            onClick={()=>{navigate('/')}}
          >
            Annuler
          </Button>

        </Box>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
    Connexion échouée. Veillez réessayer
  </Alert>
</Snackbar>
           </Box>
    );
}

export default ClientAdminConnexion;