import React, { useState } from 'react'

//Use State mainly used for tracking state value and declaring the state
// const [state, setState] = useState("") -> setState used to update the state value!

export default function State() {
  const [state, setState] = useState(0); // state name is user choice
  
  const CounterAdd = () => {
    setState( state + 1);
  }
  const CounterSub = () => {
    if(state > 0){
    setState( state - 1);
    }
  }
  
  return (
    <div className='App' display="block">
        <h5>UseState Demo Programe</h5>
        <button onClick={CounterSub} > - </button>
        <h3 > {state} </h3>
        <button onClick={CounterAdd} > + </button>
    </div>
  )
}
