import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const navigate = useNavigate()
    const role = localStorage.getItem('role')
    useEffect(()=>{
      if (role==='1') {
          navigate("admin/")
      }else if (role==='2') {
        navigate('admin-client')
      }else if (role==='3') {
        navigate('super-admin')
      }else{
         navigate('/')
      }
    },[navigate, role])
    return (
        <div>
           <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button color='primary' sx={{ flex: 1, marginRight: '0.5rem'}}  variant='outlined'
            onClick={()=>{navigate('/login/admin')}}
          >
            Se connecter en tant que partenaire de flotte
          </Button>
          <Button sx={{ flex: 1, marginLeft: '0.5rem' }} color='primary' variant='outlined'
            onClick={()=>{navigate('/login/admin-client')}}
          >
            Se connecter en tant qu'école
          </Button>
            <Button sx={{ flex: 1, marginLeft: '0.5rem' }} color='primary' variant='outlined'
            onClick={()=>{navigate('/login/super-admin')}}
          >
            Se connecter en tant que super-admin
          </Button>
        </Box>  
        </div>
    );
}

export default Home;