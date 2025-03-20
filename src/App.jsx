import React from 'react';
import logo from '../src/assets/logo.jpg';
import Banner from './component/banner/Banner';
import SnowEffect from './component/effect/SnowEffect';
import './App.css';
import Aside from './component/aside/Aside';
function App() {
    return (
        <div>
            <SnowEffect />
            <Banner />
            <Aside />
        </div>
    );
}

export default App;
