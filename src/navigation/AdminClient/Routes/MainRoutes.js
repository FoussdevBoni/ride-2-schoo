import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { menuItems } from '../menuItems';
import Drivers from '../../../components/sections/Admin/Drivers/Drivers';
import NewDriver from '../../../components/sections/Admin/Drivers/NewDriver';
import CenteredContentPage from '../../../components/widget&items/Container/MyContainer';

import AddEnfant from '../../../pages/AdminClient/Clients/NewEnfant';
import ClientsPage from '../../../pages/AdminClient/Clients/ClientsPage';
import MapPage from '../../../components/sections/Admin/Map/Map';
import DriversPage from '../../../pages/AdminClient/Drivers/DriversPage';
import AnnoncesPage from '../../../pages/Admin/Annonces/AnnoncesPage';

function MainRoutes(props) {
    const components = [
        <ClientsPage />,
        <MapPage />,
        <DriversPage />,
        <ClientsPage />,
         <AnnoncesPage />,
        <AnnoncesPage />,

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
            <Route path='admin-client/ajouter-enfant' element={<AddEnfant />}></Route>
        </Routes>
    );
}

export default MainRoutes;