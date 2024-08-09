import React, {useState} from 'react';
import './App.css';
import MainComponent from "./components/MainComponent";
import DecrementComponent from "./components/DecrementComponent";
import IncrementComponent from "./components/IncrementComponent";
import PostsComponent from "./components/PostsComponent";


const App = () => {

    return (
        <div>
            <MainComponent/>
            <DecrementComponent/>
            <IncrementComponent/>
            <PostsComponent/>
        </div>
    )
}

export default App;
