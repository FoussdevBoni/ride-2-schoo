// Partenaires.jsx

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Box } from '@mui/material';
import PartenaireItem from '../../../widget&items/PartenerItem/PartenerItem';
const Partenaires = ({rows}) => {


  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" sx={{ minWidth: window.innerWidth - 330 }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell></TableCell>
            <TableCell align="right">Nom</TableCell>
            <TableCell align="right">Email </TableCell>
            <TableCell align="right">Numéro de la CNI</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
          {
            rows!==undefined&&(
               <TableBody>
            {rows.length>0 ? rows.map((row) => (
                <PartenaireItem key={row.name} row={row} />
              )): <Box sx={{position: 'absolute' , top: '50%' , bottom: '50%' , left: '50%' , right: '50%'}}>
                <CircularProgress />
                </Box>}
        </TableBody>
            )
          }
      </Table>
    </TableContainer>
  );
};

export default Partenaires;
