import React from 'react';

const DuskBackground = () => {
    const style = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // Updated gradient with lighter, more transparent colors
        background: 'linear-gradient(to bottom, rgba(255, 126, 95, 0.8), rgba(254, 180, 123, 0.8), rgba(247, 107, 28, 0.8))',
        zIndex: -1 // Ensure this sits below all other content
    };

    return <div style={style} />;
};

export default DuskBackground;
