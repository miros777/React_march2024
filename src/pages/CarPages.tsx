import React, {useEffect, useState} from 'react';
import CarsComponent from "../Components/cars/CarsComponent";
import {carsUser} from "../services/api.services";
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";

const CarPages = () => {

    const [cars, setCars] = useState<any>();
    useEffect(() => {
        const getCartData = async () => {
            let res = await carsUser.getCars();
            return res;
        }

        let getAllcars = getCartData();
        setCars(getAllcars);

    }, [cars]);
    return (
        <div>
            Our Cars
            <CarsComponent cars={cars}/>
        </div>
    );
};

export default CarPages;