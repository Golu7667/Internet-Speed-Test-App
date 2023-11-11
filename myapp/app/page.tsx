"use client"
import { useState, useEffect } from 'react';

const NetSpeed = () => {
  const [speed, setSpeed] = useState(null);

  useEffect(() => {
    const calculateSpeed = () => {
      const img = new Image();
      const startTime = performance.now();

      img.onload = () => {
        const endTime = performance.now();
        const duration = endTime - startTime;
        const bitsLoaded = img.src.length * 8;
        const speedBps = bitsLoaded / (duration / 1000);
        const speedMbps = (speedBps / (1024 * 1024)).toFixed(2); // Convert to Mbps

        setSpeed(speedMbps);
      };

      img.src = 'https://cdn.example.com/testimage.jpg'; // Replace with an image URL hosted on a server
    };

    calculateSpeed();
  }, []);

  return (
    <div>
      <h1>Network Speed Test</h1>
      {speed ? <p>Your network speed is: {speed} Mbps</p> : <p>Calculating speed...</p>}
    </div>
  );
};

export default NetSpeed;
