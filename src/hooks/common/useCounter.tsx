import { useState } from "react";

export const useCounter = (defaultValue: number = 0) => {
  const [counter, setState] = useState(defaultValue);
  const decrease = () => {
    setState(prev => prev - 1);
  };
  const increase = () => {
    setState(prev => prev + 1);
  };

  return { counter, decrease, increase };
};
