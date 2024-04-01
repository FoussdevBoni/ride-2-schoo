import * as React from 'react';

import Box from '@mui/material/Box';
import Partenaires from '../../../components/sections/SuperAdmin/Parenaires/Partenaires';
import MyContext from '../../../globalStates/globalState';
import axios from 'axios';
import { urlApi } from '../../../Backend/apiUrl';

export default function Flottes() {
  const [partenersFlotte , setPartenersFlotte] = React.useState([])

  const {globalState, setGlobalState} = React.useContext(MyContext)
  
    const getAdmins= async ()=>{
          try {
        const response = await axios.get(urlApi+'admin/allAdmin')
         console.log("Success:", response.data);
          const  flotteData =  response.data.filter(admin=>admin.role===1)
          console.log(flotteData)
          setPartenersFlotte(flotteData)
          } catch (error) {
          
        }
      }
  React.useEffect(()=>{
        getAdmins()
  },[globalState.role])

  return (
    <Box sx={{ width: '100%' }}>
         <br/>
         <h1 style={{textAlign: 'center'}}>
                 Partenaires de flotte
             </h1>
                      <br/>

        <Partenaires rows={partenersFlotte}/>
    </Box>
  );
}