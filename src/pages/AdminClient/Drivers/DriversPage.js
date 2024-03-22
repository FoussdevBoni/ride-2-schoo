import { PersonAdd } from '@mui/icons-material';
import { Box, Fab } from '@mui/material';
import React from 'react';
import Drivers from '../../../components/sections/Admin/Drivers/Drivers';
import { useNavigate } from 'react-router-dom';

function DriversPage(props) {
    const navigate = useNavigate()
    return (
        <Box>
          
            <Box>
                 <h1 style={{textAlign: 'center', marginTop: 15}}>
                 Chauffeurs réservés à notre établissement
                 </h1>
                 <br/>
                <Drivers />     
            </Box>
               <Fab variant="extended" size="medium"  sx={{
            position:'fixed' ,  bottom: '20px',  right: '20px'
              }}  onClick={()=>{
                navigate("/admin/ajouter-chauffeur")
              }}>
                <PersonAdd sx={{ mr: 1 }} />
               Ajouter un chauffeur
           </Fab>
        </Box>
    );
}

export default DriversPage;