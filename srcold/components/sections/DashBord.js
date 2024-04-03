import { Box, Container} from '@mui/material';
import React from 'react';

import SideBar from './SideBar';
import AdminAppbar from './AppBar';

function DashBord({main , menuItems , user}) {

  return (
    <Box flex={1} >
        <Box sx={{position: 'fixed' , backgroundColor: '#191c24;' , zIndex: 1000, overflow: 'hidden', width: '100%', top: 0 , left: {xs: 0 , sm: 0 , md: '20%' , lg: '20%'}}}>
          <AdminAppbar user={user}/>
        </Box>
 

       <Box sx={{position: 'fixed' , backgroundColor: '#191c24;' , zIndex: 1000, overflow: 'hidden', height: window.innerHeight, top: 0 , left: 0 , bottom: 0 , 
       width: {xs: 0 , sm: 0 , md: '20%' , lg: '20%'},
       display: {xs: 'none' , sm: 'none' , md: 'block' , lg: 'block'}}}>
           <SideBar menuItems={menuItems}/>
        </Box>

        <Box sx={{position: 'absolute', left: {xs: 0 , sm: 0 , md: '20%' , lg: '20%'}, top: '15%'}}>
           <Container>
              {main}
           </Container>
        </Box>
    </Box>
  );
}

export default DashBord;