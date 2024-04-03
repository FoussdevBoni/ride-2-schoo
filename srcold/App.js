import logo from './logo.svg';
import './App.css';
import '../src/assets/styles/style1.css'
import '../src/assets/styles/profile.css'

import { useEffect, useState } from 'react';
import Navigation from './navigation/Navigation';
import { Box } from '@mui/material';



function App() {
   
return (
   <Box sx={{backgroundColor: '#f5f5f5'}}>
      <Navigation />
   </Box>
)
   
}

export default App;
