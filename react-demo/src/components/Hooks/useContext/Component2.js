import React from 'react'
import Component3 from './Component3';

export default function Component2(props) {
    return (
      <>
        <h1>This is Page 2</h1>
        <Component3 userContext={props.userCon} />
      </>
    );
  }
