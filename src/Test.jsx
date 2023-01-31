import React, { useState } from "react";
import Button from "./components/Button";

const Test = () => {
  console.log("test comp");
  const clickOne = () => alert("button one");
  const clickTwo = () => alert("button Two");
  return (
    <div>
      <Button
        text="Log In"
        width={100}
        height={60}
        onClick={clickOne}
        bgcolor="red"
      />
      <Button
        text="Sign In"
        width={120}
        height={80}
        onClick={clickTwo}
        bgcolor="green"
      />
      <Parent>
        <Child />
        <ChildTwo />
      </Parent>
    </div>
  );
};

export default Test;

const Parent = ({ children }) => {
  const [state, setState] = useState(0);
  console.log("parent comp");
  return (
    <div>
      <h1>parent {state} </h1>
      <button onClick={() => setState(state + 1)}>INC</button>

      {children}
    </div>
  );
};

function Child() {
  console.log("child comp");
  return <div>Child</div>;
}

function ChildTwo() {
  console.log("child 2 comp");
  return <div>Child 2</div>;
}
