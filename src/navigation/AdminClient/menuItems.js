import { Group, Home, Notifications, People, Room, Warning } from "@mui/icons-material";

export const menuItems = [
    {
        label: 'Tableau de bord', 
        route: 'admin-client/',
        icon: <Home />
    },
     {
        label: 'Ride to school', 
        route: 'admin-client/ride-to-school',
        icon: <Room />
    },
     {
        label: 'Les chauffeurs ', 
        route: 'admin-client/les-chauffeurs',
        icon: <People />
    },
     {
        label: 'Tous les enfants enregistrés', 
        route: 'admin-client/enfants',
        icon: <Group />
    },
     {
        label: 'Les abonnés', 
        route: 'admin-client/abonnes',
        icon: <Group />
    },
   
     {
        label: 'Annonces', 
        route: 'admin-client/annonces',
        icon: <Notifications />
    },
     {
        label: 'Alertes', 
        route: 'admin-client/alerts',
        icon: <Warning />
    },

]