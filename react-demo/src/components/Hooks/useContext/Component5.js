import React, {  useContext } from 'react'

export default function Component5({conData}) {

    const user = useContext(conData);
  
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }