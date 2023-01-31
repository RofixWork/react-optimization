import React, { useState, useMemo, useCallback } from "react";
import Counter from "./components/Counter";
import Info from "./components/Info";
// re run / re evaluate
const App = () => {
  const [counter, setCounter] = useState(0);
  const [person, setPerson] = useState({
    name: "ali",
  });
  const name = useMemo(() => {
    return person;
  }, [person]);
  // counter = 3
  // name => 1
  // handleIncrement
  // handleIncrementx1
  const handleIncrement = () => {
    setCounter((prev) => {
      return prev + 1;
    });
  };

  console.log("app component");
  //print
  //print

  // handleSalary = 21
  // skip
  const handleSalary = useCallback(() => {
    setPerson((prev) => {
      if (prev.salary) {
        return prev;
      } else {
        return { ...prev, salary: 40000 };
      }
    });
  }, []);

  return (
    <div>
      <Counter counter={counter} handleIncrement={handleIncrement} />
      <Info text={name} handleSalary={handleSalary} />
      {/* 5000 comp */}
    </div>
  );
  // react dom = render
};

export default App;
