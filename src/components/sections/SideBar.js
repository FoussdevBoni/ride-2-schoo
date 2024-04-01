import { Logout } from '@mui/icons-material';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
function SideBar({menuItems , user}) {
     const navigate = useNavigate()

    return (
        <Box>
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
                 onClick={()=>{
               
                 localStorage.removeItem('role')
                 localStorage.removeItem('userId')
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
    );
}

export default SideBar;