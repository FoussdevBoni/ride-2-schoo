import { Box, Fab } from '@mui/material';
import React from 'react';
import StudentList from '../../../components/sections/Admin/UsersList/ClientsList';
import { PersonAdd } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function ClientsPage(props) {
    const navigate = useNavigate()
    return (
        <Box>
              <h1 style={{textAlign: 'center', marginTop: 15}}>
                Enfants enregistrés
            </h1>
            <br/><br/>
            <StudentList />
              <Fab
               variant="extended" size="medium"  sx={{
            position:'fixed' ,  bottom: '20px',  right: '20px'
              }}  onClick={()=>{
                navigate("/admin-client/ajouter-enfant")
              }}>
                <PersonAdd sx={{ mr: 1 }} />
               Ajouter un enfant
           </Fab>
        </Box>
    );
}

export default ClientsPage;