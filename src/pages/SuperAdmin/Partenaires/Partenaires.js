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
export default function PartenairesPage() {
  const [partenersFlotte , setPartenersFlotte] = React.useState([])
  const [partenersClients , setPartenersClient] = React.useState([])
  const [others , setOthers] = React.useState([])

  const [value, setValue] = React.useState(0);
  const {globalState, setGlobalState} = React.useContext(MyContext)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    const getAdmins= async ()=>{
          try {
        const response = await axios.get(urlApi+'admin/allAdmin')
         console.log("Success:", response.data);
          const  flotteData =  response.data.filter(admin=>admin.role===1)
          const  clientsData =  response.data.filter(admin=>admin.role===2)
          console.log(flotteData)
          setPartenersClient(clientsData)
          setPartenersFlotte(flotteData)
          } catch (error) {
          
        }
      }
  React.useEffect(()=>{
        setValue(globalState.role);
        getAdmins()
  },[globalState.role])

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Partenaire de flotte" {...a11yProps(0)} />
          <Tab label="Partenaire client ( Ecoles)" {...a11yProps(1)} />
          <Tab label="Gestionnaires de bus scolaires" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Partenaires rows={partenersFlotte}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Partenaires rows={partenersClients}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Partenaires rows={partenersClients}/>
      </CustomTabPanel>
    </Box>
  );
}