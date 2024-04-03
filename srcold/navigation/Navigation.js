import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Admin from './Admin/Admin';
import { getUrlSegment } from '../functions/getUrlSegment';
import Visitor from './Visitor/Visitor';
import SuperAdmin from './SuperAdmin/SuperAdmin';
import AdminClient from './AdminClient/Admin';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { urlApi } from '../Backend/apiUrl';

function Navigation(props) {
    const userId = localStorage.getItem('userId')
  const role = localStorage.getItem('role')
    const [isVisitor , setIsVisitor ]= useState(true)
    const [isSupAdmin , setIsSupAdmin ]= useState(false)
    const [isAdmin , setIsAdmin] = useState(false)
    const [isAdminClient , setIsAdminClient] = useState(false)
    const navigate =useNavigate()
       const [user , setUser] = useState()
     // eslint-disable-next-line react-hooks/exhaustive-deps
     const getAdmins= async ()=>{
          try {
        const response = await axios.get(urlApi+'admin/allAdmin')
         console.log("Success:", response.data);
          const admin = response.data?.filter(admin=>admin._id===userId)
          console.log(admin)
          setUser(admin[0])
          } catch (error) {
          
        }
      }
     
    useEffect(()=>{
               getAdmins()

      if (role===null) {
        setIsVisitor(true)
      }else if (role==='1') {
         setIsAdmin(true)
      }else if (role==='3') {
        setIsSupAdmin(true)
      }else if(role==='2'){
           setIsAdminClient(true)
      }
     
    }, [getAdmins, navigate, role, userId])
    return (
        <Box>
            {
                isVisitor && <Box>
                   <Visitor />
                </Box>

            }
              {
                isSupAdmin && <Box>
                   <SuperAdmin user={user} />
                </Box>

            }
              {
                isAdmin && <Box>
                   <Admin user={user}/>
                </Box>

            }
             {
                isAdminClient && <Box>
                   <AdminClient user={user}/>
                </Box>

            }
        </Box>
    );
}

export default Navigation;