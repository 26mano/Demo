import React from 'react'
import Component4 from './Component4';

export default function Component3(props) {
    return (
      <>
        <h1>This is Page 3</h1>
        <Component4 userCN={props.userContext} />
      </>
    );
  }