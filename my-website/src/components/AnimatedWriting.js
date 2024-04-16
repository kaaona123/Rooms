import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedWriting = ({ text }) => {
  const { length } = useSpring({
    from: { length: 0 },
    to: { length: 100 }, // Adjust based on the maximum width of the text
    config: { duration: 5000 }, // Duration of the writing effect
  });

  return (
    <div style={{ position: 'relative', width: '80%', margin: '50px auto', padding: '20px', border: '2px solid #ccc', minHeight: '100px' }}>
      <animated.div style={{
        position: 'absolute',
        top: '40%', // Adjust this to vertically center the line
        width: length.to(l => `${l}%`), // Animate width
        height: '2px',
        backgroundColor: 'black',
      }} />
      <animated.div style={{
        position: 'absolute',
        top: '40%',
        left: length.to(l => `${l}%`),
        width: '20px',
        height: '20px',
        backgroundColor: 'saddlebrown',
        transform: 'rotate(45deg)', // Styled to look like a pencil
      }} />
      <div style={{ fontFamily: 'monospace', fontSize: '16px', visibility: 'hidden' }}>
        {text} {/* Hidden text to reserve space */}
      </div>
    </div>
  );
};

export default AnimatedWriting ;