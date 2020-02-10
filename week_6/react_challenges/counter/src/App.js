import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const modifyCounter = (num) => {
    if(count + num < 0)
    {
      setCount(0);
    } else
      setCount(count + num);
  }

  return (
    <div className='container'>
      <div className="counter">
        <button onClick={() => {modifyCounter(-1)}}>-</button>
        <h3>{count}</h3>
        <button onClick={() => {modifyCounter(1)}}>+</button>
      </div>
    </div>
  );
}

export default App;
