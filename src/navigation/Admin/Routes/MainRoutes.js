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
            <Route path='admin/ajouter-chauffeur' element={<CenteredContentPage content={<NewDriver />} />}></Route>
        </Routes>
    );
}

export default MainRoutes;