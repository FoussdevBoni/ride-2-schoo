import { Alert, Box, Button, CircularProgress, Snackbar, TextField, Typography, colors } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import axios from 'axios';
import MyContext from '../../../globalStates/globalState';
import { urlApi } from '../../../Backend/apiUrl';




function AddPartenerClient(props) {
    const navigate = useNavigate()
    const [email , setEmail] = useState('')
      const [password , setPassWord] = useState('')
      const [open , setOpen ] = useState(false)
      const [cni , setCni] = useState(false)
      const [username , setUsername] = useState('')
      const {globalState, setGlobalState} = useContext(MyContext)
 const apiUrl = "https://r2sbackend.onrender.com/";

  // Définir les états pour les données de l'administrateur et les messages d'erreur
  const adminData = {
    nom: username,
    email: email,
    password: password,
    cni: cni,
    role: 2
  };

  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting ]= useState(false)

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async () => {
              setSubmitting(true)

    try {
      // Effectuer la requête POST avec Axios
      const response = await axios.post(urlApi + "admin/create", adminData);
      console.log("Success:", response.data);
                setSubmitting(false)

       navigate('/super-admin/partenaires')
      setGlobalState((prevState)=>(
        {
          ...prevState,
          role: 1
        }
      ))
    } catch (error) {
                setSubmitting(false)

      if (error.response) {
        setErrorMessage(error.response.data.message);
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
              Ajouter une école
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
           <TextField id="outlined-basic" label="Nom de l'utilisateur" variant="outlined" 
           type='text'
           onChange={(e)=>{
            setUsername(e.target.value)
           }}
           value={username}
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
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
           <TextField id="outlined-basic" label="CNI" variant="outlined" 
           type='number'
           onChange={(e)=>{
            setCni(e.target.value)
           }}
           value={cni}
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

export default AddPartenerClient;