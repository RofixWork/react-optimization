import React from "react";
import Description from "./Description";
//re run
const Info = ({ text, handleSalary }) => {
  // name = 1
  //text => 1 1 = 2 false
  console.log("Info Component");
  //   print
  //   print
  return (
    <div>
      <Description text={text} handleSalary={handleSalary} />
    </div>
  );
};

export default React.memo(Info);
