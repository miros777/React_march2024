import React, {FC} from 'react';
import styles from './wrapper-component-to-carts.module.css';
import IWrapper from "../../model/IWrapper";


const WrapperToCarts: FC<IWrapper> = ({className, children}) => {
    return (
        <div className = {styles.cartWrapper}>{children}</div>
    )
}

export default WrapperToCarts;