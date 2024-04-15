// src/components/PixelRooms.js
import React, { useState, useEffect } from 'react';
import { useSprings, animated } from '@react-spring/web';

const numRooms = 20;
const roomSize = 50; // pixels
const maxSpeed = 5; // Maximum pixels a room can move per interval

function PixelRooms() {
  // Initial room states are set up to fit within the viewport, each with unique speed and direction
  const [rooms, setRooms] = useState(() => generateRooms(window.innerWidth - roomSize, window.innerHeight - roomSize));

  function generateRooms(maxWidth, maxHeight) {
    return Array.from({ length: numRooms }, () => ({
      x: Math.random() * maxWidth,
      y: Math.random() * maxHeight,
      dx: (Math.random() - 0.5) * 2, // Direction between -1 and 1 for x-axis
      dy: (Math.random() - 0.5) * 2, // Direction between -1 and 1 for y-axis
      active: false,
      selected: false,
      speed: Math.random() * maxSpeed, // Random speed for each room
      backgroundColor: `hsl(${Math.random() * 360}, 100%, 70%)`
    }));
  }

  useEffect(() => {
    // Update positions smoothly
    const interval = setInterval(() => {
      setRooms(rooms.map(room => {
        let newX = room.x + room.dx * room.speed;
        let newY = room.y + room.dy * room.speed;

        // Boundary checks to reverse direction upon hitting an edge
        if (newX < 0 || newX > window.innerWidth - roomSize) {
          room.dx *= -1;
          newX = room.x + room.dx * room.speed;
        }
        if (newY < 0 || newY > window.innerHeight - roomSize) {
          room.dy *= -1;
          newY = room.y + room.dy * room.speed;
        }

        return { ...room, x: newX, y: newY };
      }));
    }, 100); // Faster updates for smoother animation
    return () => clearInterval(interval);
  }, [rooms]);

  const springs = useSprings(
    rooms.length,
    rooms.map(item => ({
      to: { transform: `translate3d(${item.x}px, ${item.y}px, 0px)` },
      config: { mass: 1, tension: 120, friction: 10 },
      reset: true
    }))
  );

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' }}>
      {springs.map((props, index) => (
        <animated.div key={index} style={{
          ...props,
          position: 'absolute',
          width: `${roomSize}px`,
          height: `${roomSize}px`,
          backgroundColor: rooms[index].backgroundColor
        }} />
      ))}
    </div>
  );
}

export default PixelRooms;


