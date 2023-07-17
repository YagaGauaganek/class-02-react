import React, {useState} from 'react';
import "./Parent.css"

import Child from "../Child/Child";
export default function Parent() {
    const name = "Bob";
    // let pats = 0;

// const [state, setState] = useState(initial-Value);
// the initial value is the value you want to start with assigned to state
// state is the current value and can be used inside your componenets 
// set State is the setter function, it can be used inside your componenets
// updating the value of state will cause a re-render of any component that uses this state
// shortcut usss tab

const [pats, setPats] = useState(0);

function handleBobsPats() {
    setPats(pats + 1);
}

  return (
    <div>
        <Child name={name} pats={pats} handleBobsPats={handleBobsPats} />
    </div>
  );
}
