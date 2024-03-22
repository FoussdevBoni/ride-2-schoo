import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Admin from './Admin/Admin';
import { getUrlSegment } from '../functions/getUrlSegment';
import Visitor from './Visitor/Visitor';
import SuperAdmin from './SuperAdmin/SuperAdmin';
import AdminClient from './AdminClient/Admin';
import { useNavigate } from 'react-router-dom';

function Navigation(props) {
    const userId = localStorage.getItem('userId')
  const role = localStorage.getItem('role')
    const [isVisitor , setIsVisitor ]= useState(true)
    const [isSupAdmin , setIsSupAdmin ]= useState(false)
    const [isAdmin , setIsAdmin] = useState(false)
    const [isAdminClient , setIsAdminClient] = useState(false)
    const firstUrlSeg = getUrlSegment(1)
    const navigate =useNavigate()
    useEffect(()=>{
      if (role===null) {
        setIsVisitor(true)
      }else if (role==='1') {
         setIsAdmin(true)
      }else if (role==='3') {
        setIsSupAdmin(true)
      }else if(role==='2'){
           setIsAdminClient(true)
      }
     
    }, [navigate, role, userId])
    return (
        <Box>
            {
                isVisitor && <Box>
                   <Visitor />
                </Box>

            }
              {
                isSupAdmin && <Box>
                   <SuperAdmin />
                </Box>

            }
              {
                isAdmin && <Box>
                   <Admin />
                </Box>

            }
             {
                isAdminClient && <Box>
                   <AdminClient />
                </Box>

            }
        </Box>
    );
}

export default Navigation;