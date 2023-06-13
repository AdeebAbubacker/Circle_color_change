import React, { useState } from 'react';
import './home.css';
const Myhome = () => {
  const [counter, setCounter] = useState(0);
  const [circleColor, setCircleColor] = useState('#FFFF00');

  const increment = () => {
    setCounter(counter + 1);
  };

  const changeColor = () => {
    const randomColor = getRandomColor();
    setCircleColor(randomColor);
  };

  const getRandomColor = () => {
    const letters = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  function FormatMe(n) {
    return (n<10) ? '0'+n : n;
 }

 //for number less than 10 0 before integer else return integer only

  return (
    <body className='thisisbody'>
    <div>
      <div className='square-bg text-center'>
      <div
  className="circle rounded-circle"
  style={{backgroundColor: circleColor }}
>
  <h2 className='countinteger'>{FormatMe(counter)}</h2>
  
  <h5 onClick={increment} className='incrementbtn'>
        Click to increase counter
      </h5>
</div>
</div>

     
      <button className="changbtncolor" onClick={changeColor}>
        Change Color
      </button>
    </div>
    </body>
  );
};

export default Myhome;
