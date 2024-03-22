import { Box } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminConnexion from '../../pages/Admin/Login/Login';
import CenteredContentPage from '../../components/widget&items/Container/MyContainer';
import SuperAdminConnexion from '../../pages/SuperAdmin/Login/Login';
import ClientAdminConnexion from '../../pages/AdminClient/Login/Login';
import SupAdminRegister from '../../pages/SuperAdmin/Register/SupAdminRegister';
import Home from '../../pages/Home';


const VisitorRoutes = ()=>{
    return (
         <Routes>
                <Route path='/' Component={Home}></Route>
                <Route path='login/admin' Component={AdminConnexion}></Route>
                <Route path='login/super-admin' Component={SuperAdminConnexion}></Route>
                 <Route path='register/super-admin' Component={SupAdminRegister}></Route>
                <Route path='login/admin-client' Component={ClientAdminConnexion}></Route>


            </Routes>
    )
}

function Visitor(props) {
    return <CenteredContentPage content={<VisitorRoutes />} />
}

export default Visitor;