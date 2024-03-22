import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Help, Home, Search, Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../../globalStates/globalState';

function refreshMessages() {

 
}

export default function BottomNav({user}) {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
    const { globalState , setGlobalState} = React.useContext(MyContext)

const navigate= useNavigate()
 React.useEffect(()=>{
  if (globalState.navRoute==='') {
     setValue(0)
  }
   if (globalState.navRoute==='help') {
     setValue(1)
  }
   if (globalState.navRoute==='settings') {
     setValue(2)
  }
 },[])

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
         
        >
           <BottomNavigationAction
            label="Acceuil"
            icon={<Home sx={{ color: value === 0 ? '#F0853F' : '' }} />}
            sx={{
              '&.Mui-selected': {
                color: '#F0853F', // Couleur personnalisée lorsque l'onglet est actif
              },
            }}
         onClick={()=>{
              setGlobalState(prevState=>({
                ...prevState,
                navRoute: ''
              }))
            }} />
          <BottomNavigationAction label="Aide" icon={<Help sx={{ color: value === 1 ? '#F0853F' : '' }} />}
            sx={{
              '&.Mui-selected': {
                color: '#F0853F', // Couleur personnalisée lorsque l'onglet est actif
              },
            }}  onClick={()=>{
              setGlobalState(prevState=>({
                ...prevState,
                navRoute: 'help'
              }))
            }}/>
          <BottomNavigationAction label="Paramètres" icon={<Settings sx={{ color: value === 2 ? '#F0853F' : '' }} />}
            sx={{
              '&.Mui-selected': {
                color: '#F0853F', // Couleur personnalisée lorsque l'onglet est actif
              },
            }}  onClick={()=>{
              setGlobalState(prevState=>({
                ...prevState,
                navRoute: 'settings'
              }))
            }}/>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}


