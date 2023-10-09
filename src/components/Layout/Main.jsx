import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
             <Header></Header>
             <Outlet></Outlet>
            <h1>This is a main page</h1>
           
        </div>
    );
};

export default Main;