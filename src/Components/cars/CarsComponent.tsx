import React, {FC} from 'react';
import {ICarWithAuthModel} from "../../models/ICarWithAuthModel";

interface IProps {
    cars: ICarWithAuthModel[];
}
const CarsComponent:FC<IProps> = ({cars}) => {
    // console.log(cars);
    return (
        <div>
            {
                // cars.map((car, i) => (<div>{car.brand} {car.price}</div>))
            }
        </div>
    );
};

export default CarsComponent;