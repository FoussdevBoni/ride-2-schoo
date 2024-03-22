import { Box } from '@mui/material';
import React from 'react';

function MyDrawer(props) {
    return (
        <Box style={{
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '15px',
    maxHeight: window.innerHeight,
    overflowY: 'auto',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0, 
     width: '75%'
    
      }} className='container'>
     
  </Box>
    );
}

export default MyDrawer;