import React, {useEffect, useState} from 'react';
import CarsComponent from "../Components/cars/CarsComponent";
import {authUser, carsUser} from "../services/api.services";
import {AxiosError} from "axios";
import {CarPaginatedModel} from "../models/CarPaginatedModel";
import {useNavigate, useSearchParams} from "react-router-dom";
import PaginationComponent from "../Components/PaginationComponent";

const CarPages = () => {

    const [query] = useSearchParams({page: '1'});
    const navigate = useNavigate();

    const [cars, setCars] = useState<CarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_pages: 0,
        total_items: 0
    });

    useEffect(() => {

        let getCarsData = async () => {
            try {
                let res = await carsUser.getCars(query.get('page') || '1');
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

    }, [query]);

    return (
        <div>
            Our Cars
            <CarsComponent cars={cars.items}/>
            <PaginationComponent next={cars.next} prev={cars.prev}/>
        </div>
    );
};

export default CarPages;