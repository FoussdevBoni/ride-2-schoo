import { Group, Home, Notifications, People, Room, Warning } from "@mui/icons-material";

export const menuItems = [
    {
        label: 'Tableau de bord', 
        route: 'admin/',
        icon: <Home />
    },
     {
        label: 'Ride to school', 
        route: 'admin/ride-to-school',
        icon: <Room />
    },
     {
        label: 'Mes chauffeurs', 
        route: 'admin/mes-chauffeurs',
        icon: <People />
    },
     {
        label: 'Clients', 
        route: 'admin/mes-clients',
        icon: <Group />
    },
     {
        label: 'Annonces', 
        route: 'admin/annonces',
        icon: <Notifications />
    },
     {
        label: 'Alertes', 
        route: 'admin/alerts',
        icon: <Warning />
    },

]