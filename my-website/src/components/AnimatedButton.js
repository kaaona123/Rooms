import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

const AnimatedButton = ({ to, children }) => {
  const [hover, setHover] = React.useState(false);

  const props = useSpring({
    scale: hover ? 1.1 : 1,
    config: { mass: 1, tension: 300, friction: 10 }
  });

  return (
    <animated.div
      style={{ 
        ...props, 
        transform: props.scale.interpolate(scale => `scale(${scale})`),
        display: 'inline-block',
        margin: '0 10px',
        textDecoration: 'none',
        padding: '10px 20px',
        color: 'white',
        backgroundColor: '#007bff',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to={to} style={{ color: 'inherit', textDecoration: 'none' }}>
        {children}
      </Link>
    </animated.div>
  );
};

export default AnimatedButton;
