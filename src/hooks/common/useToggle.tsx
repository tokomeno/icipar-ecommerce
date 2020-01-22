import { useState } from "react";

export const useToggle = (defaultValue: boolean) => {
  const [isActive, setToggle] = useState(defaultValue);

  const toggle = () => {
    setToggle(prevState => !prevState);
  };

  return { isActive, toggle };
};
