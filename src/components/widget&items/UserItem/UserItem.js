import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

function UserItem({user , actionButton}) {
    return (
      <Card>
            <Avatar src={user.avatar} alt={`${user.firstName} ${user.lastName}`}   sx={{
                width: '100px', // Ajustez la largeur de l'Avatar selon vos besoins
                height: '100px', // Ajustez la hauteur de l'Avatar selon vos besoins
                margin: '0 auto', // Pour centrer l'Avatar horizontalement
                display: 'block',
                marginTop: 2 // Pour centrer l'Avatar horizontalement
              }}/>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {user.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <b>Ecole</b>: {user.school}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <b>Localité</b>: {user.location}
              </Typography>
            
              {actionButton}
            </CardContent>
            <CardActions>
              <Button color='primary' sx={{textTransform: 'none'}} variant='outlined'>
                Voir le profil
              </Button>
            </CardActions>
          </Card>
    );
}

export default UserItem;