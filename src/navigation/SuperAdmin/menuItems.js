import { Bookmark, Group, Home, Notifications, People, Room, Warning } from "@mui/icons-material";

export const menuItems = [
    {
        label: 'Tableau de bord', 
        route: 'super-admin/',
        icon: <Home />
    },
     {
        label: 'Ride to school', 
        route: 'admin/ride-to-school',
        icon: <Room />
    },
    
     {
        label: 'Nos partenaires', 
        route: 'super-admin/partenaires',
        icon: <Group />
    },
     {
        label: 'Contrats', 
        route: 'super-admin/contrats',
        icon: <Bookmark />
    },
   
    

]