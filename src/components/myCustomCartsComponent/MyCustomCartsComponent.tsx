import React, {FC} from 'react';
import ICart from "../../model/ICart";
import styles from './my-custom-carts-component.module.css';

const MyCustomCartsComponent: FC<ICart> = ({classNameMy, title, img, price}) => {
    return (
        <div className={styles.cartItem}>
            <div className={styles.cartTitle}>{title}</div>
            <img src={img} alt={title} className={styles.cartItemImg}/>
            <div className={styles.cartPrice}>{price}</div>
            <a className={styles.cartBtn} target="_blank" href="#">More...</a>
        </div>
    );
}

export default MyCustomCartsComponent;