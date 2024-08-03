import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthPage from "../pages/AuthPage";
import RegistrationPage from "../pages/RegistrationPage";
import CarPages from "../pages/CarPages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: 'Error',
        children:
            [
                {
                    index: true, element: <AuthPage/>
                },
                {
                    path: '/registration', element: <RegistrationPage/>
                },
                {
                    path: '/cars', element: <CarPages/>
                },
            ]

    }
]);