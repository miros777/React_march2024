import React, {createContext, useContext, useState} from 'react';
import './App.css';
import MainComponent from "./components/MainComponent";
import DecrementComponent from "./components/DecrementComponent";
import IncrementComponent from "./components/IncrementComponent";

type storeType = {
    counter: number,
    inc: () => void,
    dec: () => void
}

const MyContext = createContext<storeType>({
    counter: 0,
    inc: () => {
    },
    dec: () => {
    }
});
export const useAppContext = ():storeType => useContext(MyContext);

const App = () => {

    const [globalCounter, setGlobalCounter] = useState<number>(0)

    return (
        <div>
            <MyContext.Provider value={{
                counter: globalCounter,
                inc: () => {
                        setGlobalCounter(prevState => ++prevState)
                },
                dec: () => {
                    setGlobalCounter(prevState => --prevState)
                }
            }}>
                <MainComponent/>
                <DecrementComponent/>
                <IncrementComponent/>
            </MyContext.Provider>
        </div>
    )
}

export default App;
