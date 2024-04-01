import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { menuItems } from '../menuItems';
import Drivers from '../../../components/sections/Admin/Drivers/Drivers';
import NewDriver from '../../../components/sections/Admin/Drivers/NewDriver';
import CenteredContentPage from '../../../components/widget&items/Container/MyContainer';
import ClientsPage from '../../../pages/Admin/Clients/ClientsPage';
import DriversPage from '../../../pages/Admin/Drivers/DriversPage';
import MapPage from '../../../components/sections/Admin/Map/Map';
import AnnoncesPage from '../../../pages/Admin/Annonces/AnnoncesPage';
import PartenairesPage from '../../../pages/SuperAdmin/Partenaires/Partenaires';
import AddPartenaireFlotte from '../../../components/sections/SuperAdmin/AddPartenaireFlotte';
import AddPartenerClient from '../../../components/sections/SuperAdmin/AddPartenerClient';
import Contrats from '../../../pages/SuperAdmin/Contrats/Contrats';
import Flottes from '../../../pages/SuperAdmin/Partenaires/Flotte';
import Ecoles from '../../../pages/SuperAdmin/Partenaires/Ecoles';

function MainRoutes(props) {
    const components = [
        <PartenairesPage />,
        <MapPage />,
        <Flottes />,
        <Ecoles />,
        <Contrats />,

    ]
    return (
        <Routes>
            {
                menuItems.map((route, index)=>{
                    return(
                        <Route path={route.route} element={components[index]}></Route>
                    )
                })
            }
            <Route path='super-admin/ajouter-chauffeur' element={<CenteredContentPage content={<NewDriver />} />}></Route>
              <Route path='super-admin/ajouter-partener-flotte' element={<CenteredContentPage content={<AddPartenaireFlotte />} />}></Route>
               <Route path='super-admin/ajouter-partener-client' element={<CenteredContentPage content={<AddPartenerClient />} />}></Route>
               
        </Routes>
    );
}

export default MainRoutes;