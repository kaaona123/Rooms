import React from 'react';
import { useSpring, animated, config } from 'react-spring';

const Animated3DText = ({ text }) => {
    const springs = text.split('').map((letter, index) => 
        useSpring({
            loop: true,
            to: [
                { color: `hsl(${index * 360 / text.length}, 100%, 70%)` },
                { color: `hsl(${(index * 360 / text.length + 180) % 360}, 100%, 70%)` }
            ],
            from: { color: `hsl(${index * 360 / text.length}, 100%, 70%)` },
            config: { duration: 8000 },  // Increase duration for slower change
            delay: index * 200,  // Increase delay for more staggered effect
        })
    );

    const styledLetters = text.split('').map((letter, index) => (
        <animated.span key={index} style={springs[index]}>
            {letter}
        </animated.span>
    ));

    return (
        <div style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: '0 auto',
            width: '100%',
            textShadow: '0 2px 2px rgba(0,0,0,0.3)'
        }}>
            {styledLetters}
        </div>
    );
};

export default Animated3DText;





