import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Avatar, Button } from '@mui/material';
import CustomizedProgressBars from '../../../widget&items/Status/Status';
import { parents } from '../../../../data/parents';


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Avatar src={'https://cdn-icons-png.flaticon.com/512/9131/9131529.png'} sizes='100'/>
        </TableCell>
        <TableCell align="right">
          {row.nom}
        </TableCell>
        <TableCell align="right">
         { row.email}
        </TableCell>
        <TableCell align="right">
           <CustomizedProgressBars /> 
        </TableCell>
        <TableCell align="right">
          <Button color='primary' variant='outlined' style={{textTransform: 'none'}}>
             suspendre 
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Détails de l'enfant
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>
                    </TableCell>
                    <TableCell>Nom</TableCell>
                    <TableCell>Prénom</TableCell>
                    <TableCell align="right">Ecole</TableCell>
                    <TableCell align="right">Ville</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.enfants.map((enfant) => (
                    <TableRow key={enfant.nom}>
                      <TableCell component="th" scope="row">
                         <Avatar src={'https://www.shutterstock.com/image-photo/portrait-smiling-african-american-schoolboy-260nw-2326745069.jpg'} sizes='100'/>
                      </TableCell>
                      <TableCell component="th" scope="row">
                          {enfant.nom}
                      </TableCell>
                      <TableCell>
                        {enfant.prenom}
                      </TableCell>
                      <TableCell align="right">
                       {enfant.ecole}
                      </TableCell>
                      <TableCell align="right">
                         {row.adress}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};



export default function StudentsByPrents() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table"  sx={{ minWidth: window.innerWidth - 330 }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell></TableCell>
            <TableCell align="right">Nom</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Statut du contrat</TableCell>
            <TableCell align="right"></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {parents.map((row) => (
            <Row key={row.nom} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}