import React from 'react';
import Snowfall from 'react-snowfall';

const SnowEffect = () => {
    return (
        <div
            style={{
                position: 'fixed',
                width: '100%',
                height: '100vh',
                top: 0,
                left: 0,
                pointerEvents: 'none',
            }}
        >
            <Snowfall />
        </div>
    );
};

export default SnowEffect;
