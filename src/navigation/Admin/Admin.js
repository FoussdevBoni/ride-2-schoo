import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MainRoutes from './Routes/MainRoutes';
import DashBord from '../../components/sections/DashBord';
import SecondaryRoutes from './Routes/SecondaryRoutes';
import { Routes } from 'react-router-dom';
import { menuItems } from './menuItems';

function Admin(props) {
    const [hasReloaded, setHasReloaded] = useState(false);

    useEffect(() => {
        // Effectuer des opérations nécessaires lors du montage du composant ici

        // Vérifier si le rechargement n'a pas encore eu lieu
        if (!hasReloaded) {
            // Effectuer le rechargement une fois
            setHasReloaded(true);  // Met à jour l'état pour éviter les rechargements ultérieurs
        }
    }, [hasReloaded]);

    return (
        <DashBord main={
            <Box>
                <SecondaryRoutes />
                <MainRoutes />
            </Box>
        } menuItems={menuItems} />
    );
}

export default Admin;
