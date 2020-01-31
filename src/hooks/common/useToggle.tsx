import { useState } from "react";

export const useToggle = (defaultValue: boolean) => {
  const [isActive, setToggle] = useState(defaultValue);

  const toggle = () => {
    setToggle(prevState => !prevState);
  };

  const setActive = () => {
    setToggle(true);
  };

  const setInActive = () => {
    setToggle(false);
  };

  return { isActive, toggle, setActive, setInActive };
};
