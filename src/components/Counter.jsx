import React from "react";
//re run / re evluation
const Counter = ({ counter, handleIncrement }) => {
  console.log("counter component");
  //   print
  //   print
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
};

export default Counter;
