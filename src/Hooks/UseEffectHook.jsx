import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [stateName, setStateName] = useState("");
  const [check, setCheck] = useState(false);
  const [count, setCount] = useState(0);

  const buttonHandle = () => {
    setCheck((prevState) => !prevState);
  };

  useEffect(() => {
    setStateName("David");
    setCount((prevState) => prevState + 1);
  }, [check]);

  return (
    <div>
      <button onClick={buttonHandle}>Re-Render</button>
      <div>{stateName}</div>
      <div>Count:{count}</div>
    </div>
  );
};

export default UseEffectHook;
