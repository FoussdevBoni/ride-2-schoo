import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MainRoutes from './Routes/MainRoutes';
import DashBord from '../../components/sections/DashBord';
import SecondaryRoutes from './Routes/SecondaryRoutes';
import { Routes, useNavigate } from 'react-router-dom';
import { menuItems } from './menuItems';
import axios from 'axios';
import { urlApi } from '../../Backend/apiUrl';
const userId = localStorage.getItem('userId')
function SuperAdmin({user}) {
       
    const SupAdminRoutes = ()=>{
    
          return (
        <Box>
            <SecondaryRoutes />
            <MainRoutes />
        </Box>
    );
    }

  return <DashBord user={user} main={<SupAdminRoutes />} menuItems={menuItems}/>


}

export default SuperAdmin;