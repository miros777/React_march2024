import React, {FC, useState} from 'react';
import styles from './my-custom-button-component.module.css'


interface IProps{
    nameClassCss: string,
    children: React.ReactNode
}

const MyButtonComponent: FC<IProps> = ({nameClassCss, children}) => {

    const [counter, setCounter] = useState<number>(0);
    const someHandler = () => {
        setCounter(counter + 1);
    }
    return (
        <button
            className={[styles.btnBg, styles.btnColor, styles.btnFontSize].join(' ')}
            onClick={()=>{
            someHandler();
        }}
        >
            {children}
            {counter}
        </button>
    )
}

export default MyButtonComponent;