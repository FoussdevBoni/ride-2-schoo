import { Box } from '@mui/material';
import React from 'react';
import StudentList from '../../../components/sections/Admin/UsersList/ClientsList';

function ClientsPage(props) {
    return (
        <Box>
              <h1 style={{textAlign: 'center', marginTop: 15}}>
                Nos clients
            </h1>
            <br/><br/>
            <StudentList />
        </Box>
    );
}

export default ClientsPage;