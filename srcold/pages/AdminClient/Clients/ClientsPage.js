import { Box, Fab } from '@mui/material';
import React from 'react';
import { PersonAdd } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Parents from '../../../components/sections/AdminClient/UsersList/Parents';
function ClientsPage(props) {
    const navigate = useNavigate()

    return (
        <Box>
              <h1 style={{textAlign: 'center', marginTop: 15}}>
                Les parents enregistrés
            </h1>
            <br/><br/>
            <Parents />
              <Fab
               variant="extended" size="medium"  sx={{
            position:'fixed' ,  bottom: '20px',  right: '20px'
              }}  onClick={()=>{
                navigate("/admin-client/ajouter-enfant")
              }}>
                <PersonAdd sx={{ mr: 1 }} />
               Ajouter un parent
           </Fab>
        </Box>
    );
}

export default ClientsPage;