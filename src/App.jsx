import { useEffect } from 'react';
import './App.css'
import BaseNavigator from './baseNavigator/BaseNavigator'
import { BrowserRouter } from 'react-router-dom'
import WOW from "wow.js";
import "animate.css";

function App() {

  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <>
      <BrowserRouter>
        <BaseNavigator />
      </BrowserRouter>
      {/* <NavBarComp /> */}
    </>
  )
}

export default App
