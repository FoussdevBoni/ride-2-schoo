import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Partenaires from '../../../components/sections/SuperAdmin/Parenaires/Partenaires';
import MyContext from '../../../globalStates/globalState';
import axios from 'axios';
import { urlApi } from '../../../Backend/apiUrl';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const userId = localStorage.getItem('userId');
export default function Ecoles() {
  const [partenersClients , setPartenersClient] = React.useState([])

  const {globalState, setGlobalState} = React.useContext(MyContext)
  
    const getAdmins= async ()=>{
          try {
        const response = await axios.get(urlApi+'admin/allAdmin')
         console.log("Success:", response.data);
          const  flotteData =  response.data.filter(admin=>admin.role===1)
          const  clientsData =  response.data.filter(admin=>admin.role===2)
          console.log(flotteData)
          setPartenersClient(clientsData)
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
                Ecoles partenaires
             </h1>
                          <br/>

               <Partenaires rows={partenersClients}/>
    </Box>
  );
}