import { Box, Fab } from '@mui/material';
import React from 'react';
import { PersonAdd } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import StudentsList from '../../../components/sections/AdminClient/UsersList/Students';

function StudentsPage(props) {
    const navigate = useNavigate()

    return (
        <Box>
              <h1 style={{textAlign: 'center', marginTop: 15}}>
                Tous les enfants inscrits
            </h1>
            <br/><br/>
            <StudentsList />
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

export default StudentsPage;