import React, { useState, useEffect } from 'react';
import logo from '../src/assets/logo.jpg';
import Banner from './component/banner/Banner';
import SnowEffect from './component/effect/SnowEffect';
import './App.css';
import Aside from './component/aside/Aside';
import Invitationletter from './component/invitationletter/invitationletter';
import Heart from './component/heart/heart';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000); // 3 seconds

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="loading-screen">
                <Heart />
            </div>
        );
    }

    return (
        <div>
            <SnowEffect />
            <Banner />
            <Aside />
            <Invitationletter />
        </div>
    );
}

export default App;
