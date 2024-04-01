import { Bookmark, Group, Home, LocalTaxi, Notifications, People, Room, School, TaxiAlert, Warning } from "@mui/icons-material";

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
        label: 'Nos partenaires de flotte', 
        route: 'super-admin/partenaires-flotte',
        icon: <LocalTaxi />
    },
    {
        label: 'Ecoles partenaires', 
        route: 'super-admin/ecoles',
        icon: <School />
    },
     {
        label: 'Contrats', 
        route: 'super-admin/contrats',
        icon: <Bookmark />
    },
   
    

]