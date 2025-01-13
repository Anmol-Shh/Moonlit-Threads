import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = ({ cursorColor }) => {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      setDotPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animateRing = (time) => {
      const easingFactor = 0.1;
      ringRef.current.x += (dotPosition.x - ringRef.current.x) * easingFactor;
      ringRef.current.y += (dotPosition.y - ringRef.current.y) * easingFactor;
      setRingPosition({ x: ringRef.current.x, y: ringRef.current.y });
      requestRef.current = requestAnimationFrame(animateRing);
    };

    requestRef.current = requestAnimationFrame(animateRing);
    return () => cancelAnimationFrame(requestRef.current);
  }, [dotPosition]);

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          backgroundColor: cursorColor, // Dynamic color for dot
        }}
      />
      <div
        className="cursor-ring"
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
          borderColor: cursorColor, // Dynamic color for ring
        }}
      />
    </>
  );
};

export default CustomCursor;
