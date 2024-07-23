import React from 'react';
import MenuComponent from "../components/MenuComponent";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default MainLayout;