import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import RatingNoEdit from '../Rating/OnlyRead';
import { useNavigate } from 'react-router-dom';

function ConductItem({driver  , adminId , user}) {
  const navigate = useNavigate()
    return (
      <Card>
            <Avatar src={driver.profile} alt={`${driver.firstName} ${driver.lastName}`}   sx={{
                width: '100px', // Ajustez la largeur de l'Avatar selon vos besoins
                height: '100px', // Ajustez la hauteur de l'Avatar selon vos besoins
                margin: '0 auto', // Pour centrer l'Avatar horizontalement
                display: 'block',
                marginTop: 2 // Pour centrer l'Avatar horizontalement
              }}/>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {`${driver.firstName} ${driver.lastName}`}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <b>Contact</b>: {driver.phoneNumber}
              </Typography>
              <Typography variant="body2" color="textSecondary">
              <b>Ville</b>: {driver.city}
              </Typography>
             
            </CardContent>
           <CardActions>
              <Button color='primary' sx={{textTransform: 'none'}} variant='outlined' onClick={()=>{
                navigate('/admin/chauffeur')
              }}>
                Voir le profil
              </Button>
            </CardActions>
          </Card>
    );
}

export default ConductItem;