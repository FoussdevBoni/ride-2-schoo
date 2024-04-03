import { Box, List } from '@mui/material';
import React from 'react';
import AnnonceItem from '../../../components/widget&items/AnnnonceItem/AnnonceItem';

function AnnoncesPage(props) {
    return (
        <Box>
                <List sx={{ width: window.innerWidth-350 ,  bgcolor: 'background.paper' }}>
                   {
                    [1 , 4 ,7 , 8 ,9].map(()=>{
                        return(
                             <AnnonceItem />
                        )
                    })
                   }
                </List>
        </Box>
    );
}

export default AnnoncesPage;