import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';

const AnimatedPixelRoom = ({ style, id, to, children }) => {
    const [hover, setHover] = useState(false);

    const hoverProps = useSpring({
        transform: hover ? 'scale(1.1)' : 'scale(1)',
        config: { mass: 1, tension: 300, friction: 10 }
    });

    return (
        <animated.div
            style={{
                ...style,
                ...hoverProps,
                position: 'absolute',
                width: '50px',
                height: '50px',
                borderRadius: '5px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none'
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {to ? <Link to={to} style={{ color: 'inherit', textDecoration: 'none' }}>{children}</Link> : children}
        </animated.div>
    );
};

export default AnimatedPixelRoom;




