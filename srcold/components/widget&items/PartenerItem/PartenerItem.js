// PartenaireItem.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from 'react-router-dom';

const PartenaireItem = ({ row }) => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()
  return (
    <>
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
          <Avatar src={row.avatarSrc} sizes='100'/>
        </TableCell>
        <TableCell align="right">{row.nom}</TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">{row.cni}</TableCell>
        <TableCell align="right">
          <Button color='primary' variant='outlined' style={{textTransform: 'none'}} onClick={()=>{
            navigate('/admin')
            
          }}>
            Gérer
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Détails du partenaire
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Nom</TableCell>
                    <TableCell>Prénom</TableCell>
                    <TableCell align="right">Ecole</TableCell>
                    <TableCell align="right">Ville</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                 
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

PartenaireItem.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    avatarSrc: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        avatarSrc: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        school: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default PartenaireItem;
