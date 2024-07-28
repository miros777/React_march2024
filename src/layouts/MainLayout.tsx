import React from 'react';
import {Outlet} from "react-router-dom";
import FooterComponent from "../Components/FooterComponent/FooterComponent";
import HeaderComponent from "../Components/HeaderComponent/HeaderComponent";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
            </div>
    );
};

export default MainLayout;