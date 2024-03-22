import { Logout } from '@mui/icons-material';
import { Box, Button, Container, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import logo from '../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom';
import AdminHeader from './../widget&items/Header/Header';

function DashBord({main , menuItems}) {
 const navigate = useNavigate()
  return (
    <Box flex={1} >
        <Box sx={{position: 'fixed' , backgroundColor: '#191c24;' , zIndex: 1000, overflow: 'hidden', width: '100%', top: 0 , left: '20%'}}>
          <AdminHeader />
        </Box>
 

        <Box sx={{position: 'fixed' , backgroundColor: '#191c24;' , zIndex: 1000, overflow: 'hidden', width: '20%' , height: window.innerHeight, top: 0 , left: 0 , bottom: 0}}>
        <Box sx={{height: 100, width: 100}}>
          <img src={logo} alt='' style={{width: '100%' }} />
        </Box>
            <Divider />
        <List sx={{color: 'white'}}>
          {menuItems.map((item, index) => (
            <ListItem key={item.label} disablePadding sx={{ display: 'block' }} onClick={()=>{
              navigate(item.route)
            }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent:  'initial' ,
                  px: 2.5,
                }}
                onClick={()=>{
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3 ,
                    justifyContent: 'center',
                    color: 'white'
                  }}
                >
                 {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} sx={{ opacity:  1 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List sx={{ color: 'white'}}>
          {['Se déconnecter'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: 'initial' ,
                  px: 2.5,
                }}
               
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <Logout />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity:  1 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        </Box>

        <Box sx={{position: 'absolute', left: '20%', top: '15%'}}>
           <Container>
              {main}
           </Container>
        </Box>
    </Box>
  );
}

export default DashBord;