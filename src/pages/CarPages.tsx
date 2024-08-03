import React, {useEffect, useState} from 'react';
import CarsComponent from "../Components/cars/CarsComponent";
import {authUser, carsUser} from "../services/api.services";
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";
import {AxiosError} from "axios";
import {CarPaginatedModel} from "../models/CarPaginatedModel";
import {useNavigate} from "react-router-dom";

const CarPages = () => {

    const [cars, setCars] = useState<CarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_pages: 0,
        total_items: 0
    });
    const navigate = useNavigate();
    useEffect(() => {

        let getCarsData = async () => {
            try {
                let res = await carsUser.getCars();
                setCars(res);

            } catch (e) {
                let axiosError = e as AxiosError;
                if (axiosError && axiosError?.response?.status === 401) {
                    console.log(axiosError);

                    try {
                        await authUser.refresh();
                    } catch (e) {
                        return navigate('/');
                    }
                    //todo refresh or redirect

                }
            }
        }
        getCarsData();

    }, []);

    return (
        <div>
            Our Cars
            <CarsComponent cars={cars.items}/>
        </div>
    );
};

export default CarPages;