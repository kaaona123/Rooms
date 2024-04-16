import React from 'react';
import { useSprings, animated } from 'react-spring';

const Animated3DText = ({ text }) => {
    const letters = text.split('');
    const springs = useSprings(
        letters.length,
        letters.map((_, index) => ({
            loop: true,
            to: [
                { color: `hsl(${index * 60 / letters.length}, 100%, 70%)` },
                { color: `hsl(${(index * 60 / letters.length + 180) % 360}, 100%, 70%)` }
            ],
            from: { color: `hsl(${index * 60 / letters.length}, 100%, 70%)` },
            config: { duration: 8000 },
            delay: index * 200,
        }))
    );

    return (
        <div style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: '0 auto',
            width: '100%',
            textShadow: '0 2px 2px rgba(0,0,0,0.3)'
        }}>
            {springs.map((props, index) => (
                <animated.span key={index} style={props}>
                    {letters[index]}
                </animated.span>
            ))}
        </div>
    );
};

export default Animated3DText;




