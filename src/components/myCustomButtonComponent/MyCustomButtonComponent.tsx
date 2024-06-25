import React, {FC, useState} from 'react';
import styles from './my-custom-button-component.module.css'

interface IProps {
    nameClassCss: string,
    children: React.ReactNode,
    label: string
}

const MyCustomButtonComponent: FC<IProps> = ({nameClassCss, children, label}) => {

    const [counter, setCounter] = useState<number>(0);
    const someHandler = () => {
        setCounter(counter + 1);
    }
    return (
        <div>
            <div>{label}</div>
            <button
                className={[styles.btnBg, styles.btnColor, styles.btnFontSize].join(' ') }
                onClick={(): void => {
                    someHandler();
                }}
            >
                {children}
                __{counter}
            </button>
        </div>
    )
}

export default MyCustomButtonComponent;