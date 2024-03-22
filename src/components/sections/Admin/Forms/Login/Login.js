import { Alert, Box, Button, Snackbar, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../../Backend/config/config';
import { colors } from '../../../../../data/colors';
import MyContext from '../../../../../globalStates/globalState';


function Connexion(props) {
    const navigate = useNavigate()
    const [email , setEmail] = useState('')
      const [password , setPassWord] = useState('')
      const [open , setOpen ] = useState(false)
      const [error , setError] = useState(false)
      const {globalState , setGlobalState }= useContext(MyContext)
const handleClose = ()=>{
  setOpen(false)
}
useEffect(()=>{
  setGlobalState(prevState=>(
    {
     ...prevState, 
     show: false
    }
  ))
},[])
    const login = ()=>{
      if(email==='lo292852@gmail.com'){
         signInWithEmailAndPassword(auth , email , password).then((user)=>{
         navigate(`admin/${user.user.uid}/`)
      }).catch((err)=>{
        navigate(``)
        console.log(err)
        setError(true)
        setOpen(true)
      })
      }else{
        navigate('sign-in')
      }
    }
    return (
        <Box>
            <Typography variant='div' component={'h1'} sx={{textAlign:'center'}}>
                Se connecter en tant qu'administrateur
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
          <Button sx={{ flex: 1, marginRight: '0.5rem' , backgroundColor:  colors.primary}}  variant='contained'
           onClick={()=>{
            login()
           }}
          >
            Continuer
          </Button>
          <Button sx={{ flex: 1, marginLeft: '0.5rem' }} style={{backgroundColor: colors.warning}} variant='contained'
            onClick={()=>{navigate('/')}}
          >
            Annuler
          </Button>

        </Box>
        <Typography variant="body2" sx={{display:'flex'}} mt={4}>
          Vous n'avez pas un compte administrateur ?
            <NavLink
             
              to="/admin/sign-up"
              underline="hover"
              sx={{ color: colors.primary, ':hover': { color: 'indigo.500' } , ml:2}}
             
            >
            Créer un compte
            </NavLink>
          </Typography>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
    Connexion échouée. Veillez réessayer
  </Alert>
</Snackbar>
           </Box>
    );
}

export default Connexion;