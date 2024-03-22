import { Alert, Box, Button, Snackbar, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../../Backend/config/config';
import { colors } from '../../../../../data/colors';
import MyContext from '../../../../../globalStates/globalState';
import axios from 'axios';


function AdminRegister(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const {globalState, setGlobalState }= useContext(MyContext)

  
 const getToken = async()=>{
  await axios.get('https://api.betacardrive.com/sanctum/csrf-cookie').then((response)=>{
    handleRegister()
  })
 }
  const navigate = useNavigate()
  const handleRegister = async () => {
    try {
      // Configurer les en-têtes avec le token CSRF
      const headers = {
        'Content-Type': 'application/json',
        'X-XSRF-TOKEN': csrfToken,
      };

      // Effectuer la requête avec Axios
      const response = await axios.post('https://api.betacardrive.com/api/register', {
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      }, { headers });

      console.log('Inscription réussie:', response.data);
            navigate('/admin/createHub')
           localStorage.setItem('user' , JSON.stringify(response.data))
            setGlobalState(prevState=>(
    {
     ...prevState, 
     show: true
    }
  ))
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
    }
  };


  useEffect(()=>{
  setGlobalState(prevState=>(
    {
     ...prevState, 
     show: false
    }
  ))
},[])
    return (
        <Box>
            <Typography variant='div' component={'h1'} sx={{textAlign:'center'}}>
                S'inscrire en tant qu'administrateur
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
           onChange={(e)=>{setPassword(e.target.value)}}
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
           <TextField id="outlined-basic" label="Confirmer votre mot de passe" variant="outlined" 
           value={confirmPassword}
           onChange={(e)=>{setConfirmPassword(e.target.value)}}
           type='password'
           />
           </Box> 
        

             <br /><br/>
           <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button sx={{ flex: 1, marginRight: '0.5rem' , backgroundColor:  colors.primary}}  variant='contained'
           onClick={()=>{
            getToken()
           }}
          >
            S'inscrire
          </Button>
          <Button sx={{ flex: 1, marginLeft: '0.5rem' }} style={{backgroundColor: colors.warning}} variant='contained'
        
          >
            Annuler
          </Button>

        </Box>
        <Typography variant="body2" sx={{display:'flex'}} mt={4}>
          Vous avez  un compte administrateur ?
            <NavLink
             
              to="/admin"
              underline="hover"
              sx={{ color: 'indigo.600', ':hover': { color: 'indigo.500' } , ml:2}}
             
            >
            Créer un compte
            </NavLink>
          </Typography>
          
           </Box>
    );
}

export default AdminRegister;