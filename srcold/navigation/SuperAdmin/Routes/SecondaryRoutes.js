import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewDriver from '../../../components/sections/Admin/Drivers/NewDriver';
import DriverDetails from '../../../components/sections/Admin/ConductDetails/ConductDetails';

function SecondaryRoutes(props) {
    return (
        <Routes>
            {
                /**La route pour afficheer les détails de chaque chauffeurs */
            }
            <Route path='/admin/chauffeur' element={<DriverDetails />}></Route>
        </Routes>
    );
}

export default SecondaryRoutes;