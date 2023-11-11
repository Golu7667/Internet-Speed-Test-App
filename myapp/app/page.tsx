"use client"
import { useState, useEffect } from 'react';

const NetSpeed: React.FC = () => {
  const [speed, setSpeed] = useState<string | null>(null);

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

      img.src = 'https://user-images.githubusercontent.com/103061012/282237984-dc090cc2-021e-44e6-aed1-b9a65df06e80.PNG'; // Replace with an image URL hosted on a server
    };

    calculateSpeed();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '200px', fontWeight: 'bold' }}>
      <h1 style={{ marginBottom: '10px', color: 'black', fontFamily: 'fantasy', fontSize: '3rem' }}>Network Speed Test</h1>
      {speed ? (
        <p style={{ marginBottom: '10px', color: 'green' }}>
          Your network speed is: <span style={{ fontSize: '3rem' }}>{speed} Mbps</span>
        </p>
      ) : (
        <p style={{ marginBottom: '10px', color: 'green' }}>Calculating speed...</p>
      )}
    </div>
  );
};

export default NetSpeed;
