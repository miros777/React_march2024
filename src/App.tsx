import React, {useState} from 'react';
import './App.css';
import MainComponent from "./components/MainComponent";
import DecrementComponent from "./components/DecrementComponent";
import IncrementComponent from "./components/IncrementComponent";
import {create} from "zustand";

type storeType = {
    counter: number,
    inc: () => void,
    dec: () => void
}
export const useStore = create<storeType>((set) => ({
    counter: 0,
    inc: () => {
        set((state) => ({counter: state.counter + 1}));
    },
    dec: () => {
        set((state) => ({counter: state.counter - 1}));
    }
}));

const App = () => {

    return (
        <div>
            <MainComponent/>
            <DecrementComponent/>
            <IncrementComponent/>
        </div>
    )
}

export default App;
