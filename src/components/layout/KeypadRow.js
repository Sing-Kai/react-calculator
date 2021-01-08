import React from 'react'
import Button from "../button/Button";

const KeypadRow = (props) =>{

  return(
    <div className ="keypad__row">
      {props.children}
    </div>
  );
}

export default KeypadRow;