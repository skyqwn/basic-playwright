"use client";

import { useState } from "react";

const initValue = 0;

const Counter = () => {
  const [count, setCount] = useState(initValue);

  const onClickPlus = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMinus = () => {
    setCount((prev) => prev - 1);
  };
  const onClickReset = () => {
    setCount(initValue);
  };

  return (
    <div className="p-5">
      <div className="text-xl font-bold mb-2">카운터: {count}</div>
      <div className="flex gap-3 *:cursor-pointer ">
        <button
          onClick={onClickPlus}
          className="border-2 border-white p-3 text-lg "
        >
          +1
        </button>
        <button
          onClick={onClickMinus}
          className="border-2 border-white p-3 text-lg "
        >
          -1
        </button>
        <button
          onClick={onClickReset}
          className="border-2 border-white p-3 text-lg "
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
