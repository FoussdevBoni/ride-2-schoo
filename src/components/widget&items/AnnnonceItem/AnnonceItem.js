import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Notifications } from '@mui/icons-material';

export default function AnnonceItem() {
  return (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">
            <Notifications />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Augmentation du prix du carburant?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               Le prix du carburant a augmenté de 50%. La populatio  est vraiment inquiète
              </Typography>
              {"12:30"}
            </React.Fragment>
          }
        />
      </ListItem>
  );
}
