import React, { useState } from 'react';

export default function Counter() {
 const [count, setCount] = useState(0);
function increment(){
    setCount(count + 1);
}
function decrement(){
    setCount(count -1)
}
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>
        increment
      </button>
      <button onClick={decrement}>
        decrement
      </button>
    </div>
  );
}