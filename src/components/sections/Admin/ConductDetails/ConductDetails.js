import { Call, ConfirmationNumberSharp, Mail, Room, Star } from '@mui/icons-material';
import { Avatar, Box, Button, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, Modal, Slide, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { ref, remove } from 'firebase/database';
import { colors } from '../../../../data/colors';
import RatingNoEdit from '../../../widget&items/Rating/OnlyRead';
function DriverDetails() {
const [open , setOpen ] = useState(false)

const handleCloseModal = ()=>{
  setOpen(false)
}

  const Confirm = ()=>{
    return(
       <Box>
             <Typography component={'div'} textAlign={'center'} fontWeight={'900'}>
              Voulez-vraiment desactiver  ce chauffeur ?
             </Typography>
             <Button sx={{ flex: 1, marginLeft: '0.5rem' }} style={{backgroundColor: colors.warning}} variant='contained'
           
          >
           Oui
          </Button>
             <Button sx={{ flex: 1, marginLeft: '0.5rem' }} style={{backgroundColor: colors.warning}} variant='contained'
            onClick={()=>{
               setOpen(false)
            }}
          >
           non
          </Button>
          </Box>
    )
  }
    return (
        <Box padding={10}>
           <Grid container marginTop={1}>
            <Grid item xs={12} md={12}>
                <Box>
                    <Avatar src={''} alt={``}   sx={{
                width: '100px', // Ajustez la largeur de l'Avatar selon vos besoins
                height: '100px', // Ajustez la hauteur de l'Avatar selon vos besoins
                margin: '0 auto', // Pour centrer l'Avatar horizontalement
                display: 'block',
                marginTop: 2 // Pour centrer l'Avatar horizontalement
              }}/>
                    <Typography component={'h3'} variant='h4' textAlign={'center'}>
                        {'Francis'}   {'ADAM'}

                    </Typography>
                </Box>
            </Grid>
              <Grid item xs={12} md={12}>
                   <List>
       <ListItem>
        <ListItemAvatar>
           <Avatar>
             <Call />
           </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Numéro de téléphone" secondary={'+237 589 4578 5 5'} />
      </ListItem>
       <ListItem>
        <ListItemAvatar>
           <Avatar>
             <Room />
           </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Ville du chauffeur" secondary={'DOUALA'} />
      </ListItem>
     
      </List>
        </Grid>
     </Grid> 
     <br />
       
              
          
        
   <br /><br/>
           <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button  sx={{ flex: 1, marginRight: '0.5rem' , backgroundColor:  colors.primary , color: 'white'}} 
           
          >
            Modifier  les informations du chauffeur
          </Button>
          <Button sx={{ flex: 1, marginLeft: '0.5rem' }} style={{backgroundColor: colors.warning}} variant='contained'
            onClick={()=>{
              setOpen(true)
            }}
          >
            Supprimer le chaufeur
          </Button>
           
        </Box>
     <Modal open={open} onClose={handleCloseModal} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Container  maxWidth="sm" style={{
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '15px',
    marginTop: '20px',
    maxHeight: window.innerHeight,
    overflowY: 'auto',
   
  }} className='container'>
    <Confirm />
  </Container>
  </Slide>
  </Modal>
    </Box>
    );
}

export default DriverDetails;