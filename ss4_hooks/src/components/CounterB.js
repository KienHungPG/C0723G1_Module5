import React, { useState } from "react";
import { Button } from "react-bootstrap";

function CounterB() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const changeValue1 = () => {
    setCount1((previousValue1) => previousValue1 + 1);
  };
  const changeValue2 = () => {
    setCount2((previousValue2) => previousValue2 + 2);
  };

  return (
    <>
      <div>
        <p>Count1: {count1}</p>
        <Button variant="warning" onClick={changeValue1}>
          Add 1
        </Button>
      </div>
      <div>
        <p>Count2: {count2}</p>
        <Button variant="warning" onClick={changeValue2}>
          Add 2
        </Button>
      </div>
    </>
  );
}

export default CounterB;
