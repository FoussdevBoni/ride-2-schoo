import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import MainRoutes from './Routes/MainRoutes';
import DashBord from '../../components/sections/DashBord';
import SecondaryRoutes from './Routes/SecondaryRoutes';
import { Routes } from 'react-router-dom';
import { menuItems } from './menuItems';

function AdminClient({user}) {
   useEffect(()=>{
   },[])
    const AdminRoutes = ()=>{
     
          return (
        <Box>
            <SecondaryRoutes />
            <MainRoutes />
        </Box>
    );
    }

  return             <DashBord user={user} main={<AdminRoutes />} menuItems={menuItems}/>


}

export default AdminClient;