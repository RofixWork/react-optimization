import React from "react";

const Description = ({ text, handleSalary }) => {
  console.log("Description Component");
  //print
  //   print

  return (
    <div>
      <h2>{text.name}</h2>
      <h2>{text.salary}</h2>
      <button onClick={handleSalary}>add salary</button>
    </div>
  );
};

export default Description;
