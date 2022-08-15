import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from "../pages/Auth.jsx";
import Home from "../pages/Home.jsx";
import Register from "../pages/Register.jsx";
import Admin from "../pages/Admin.jsx";

const Index = () => {
    return (
        <>
            <Routes>
                <Route path='/' exact element={ <Home /> } />
                <Route path='/auth' element={ <Auth /> } />
                <Route path='/management' element={ <Admin /> } />
                <Route path='/register' element={ <Register /> } />
            </Routes>
        </>
    );
};

export default Index;
