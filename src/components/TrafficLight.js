import { useState, useEffect } from 'react';

function Light({ backgroundColor }) {
  return (
    <div 
      className='traffic-container-light' 
      style={{ backgroundColor }}
    />
  )
}

export default function TrafficLight({ initalColor = 'green', config }) {
  const [currentColor, setCurrentColor] = useState(initalColor);
  useEffect(() => {
    const { duration, next } = config[currentColor];
    setTimeout(() => {
      setCurrentColor(next)
    }, duration);
  }, [currentColor]);

  return (
    <>
      <div className='spoiler' />
      <div className='spoiler1' />
      <div className='spoiler2' />
      <div className='traffic-container'>
        {Object.keys(config).map((item) => {
          return (
            <Light key={item} backgroundColor={ item === currentColor ? currentColor : undefined} />
          )
        })}
      </div>
      <div className='spoiler3' />
      <div className='spoiler4' />
      <div className='spoiler5' />
    </>
  );
}
