import React, {FC} from 'react';
import './App.css';
import MyButtonComponent from "./components/myCustomButtonComponent/MyCustomButtonComponent";

const App = () => {
  return (
      <>
      <MyButtonComponent nameClassCss={'btn'}>Button 1</MyButtonComponent>
      <MyButtonComponent nameClassCss={'btn'}>Button 2</MyButtonComponent>
      </>
  )
}

export default App;
