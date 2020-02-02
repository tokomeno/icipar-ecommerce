import { useState } from "react";

export const useCounter = (
  defaultValue: number = 0,
  minValue: number | null = null
) => {
  const [counter, setState] = useState(defaultValue);
  const decrease = () => {
    setState(prev => {
      if (minValue && prev <= minValue) return prev;
      return prev - 1;
    });
  };
  const increase = () => {
    setState(prev => prev + 1);
  };

  return { counter, decrease, increase };
};
