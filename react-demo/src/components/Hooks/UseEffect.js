import React, { useState, useEffect } from 'react';

function UseEffect (){
  const [message, setMessage] = useState('Hi there, how are you?');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('trigger use effect hook');

    setTimeout(() => {
      setMessage("I'm fine, thanks for asking.");
    }, 3000)
  },[])

  useEffect(() => {
    console.log(`You have clicked the button ${count} times`)
  },[count]);

  return( 
    <div className='App'>
        <h4> UseEffect Demo </h4>
        <div>
        <h2>{message}</h2>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <h2>You have clicked the button {count} times </h2>
        </div>
    </div>
  
  )
};

export default UseEffect;


