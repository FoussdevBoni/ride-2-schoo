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
function SuperAdmin(props) {
  

    const SupAdminRoutes = ()=>{
      const [user , setUser] = useState()
      const getAdmins= async ()=>{
          try {
        const response = await axios.get(urlApi+'admin/allAdmin')
         console.log("Success:", response.data);
          const admin = response.data?.filter(admin=>admin._id===userId)
          console.log(admin[0])
          } catch (error) {
          
        }
      }
      useEffect(()=>{
         getAdmins()
      },[])
          return (
        <Box>
            <SecondaryRoutes />
            <MainRoutes />
        </Box>
    );
    }

  return             <DashBord main={<SupAdminRoutes />} menuItems={menuItems}/>


}

export default SuperAdmin;