import React from 'react'
import Component5 from './Component5';

export default function Component4({userCN}) {
    return (
      <>
        <h1>This is Page 4</h1>
        <Component5 conData={userCN} />
      </>
    );
  }
