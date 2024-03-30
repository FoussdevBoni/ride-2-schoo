import { Box } from '@mui/material';
import React from 'react';
import StudentsList from './../../../components/sections/AdminClient/UsersList/Students';

function ClientsPage(props) {
    return (
        <Box>
              <h1 style={{textAlign: 'center', marginTop: 15}}>
                Nos clients
            </h1>
            <br/><br/>
            <StudentsList />
        </Box>
    );
}

export default ClientsPage;