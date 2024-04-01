import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CenteredContentPage from '../../components/widget&items/Container/MyContainer';
import SuperAdminConnexion from '../../pages/SuperAdmin/Login/Login';
import SupAdminRegister from '../../pages/SuperAdmin/Register/SupAdminRegister';
import AdminLogin from '../../pages/Login';


const VisitorRoutes = ()=>{
    return (
         <Routes>
                <Route path='/' Component={AdminLogin}></Route>
                <Route path='login/super-admin' Component={SuperAdminConnexion}></Route>
                 <Route path='register/super-admin' Component={SupAdminRegister}></Route>
            </Routes>
    )
}

function Visitor(props) {
    return <CenteredContentPage content={<VisitorRoutes />} />
}

export default Visitor;