import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthPage from "./pages/AuthPage";
import RegistrationPage from "./pages/RegistrationPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children:
            [
                {
                    index: true, element: <AuthPage/>
                },
                {
                    path: 'registration', element: <RegistrationPage/>
                },
                {
                    // path: 'cars', element: <RegistrationPage/>
                }
            ]

    }
]);

root.render(
    <RouterProvider router={router}/>
);

