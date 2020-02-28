import { useState } from "react";

export const useActiveState = <T,>(defaultValue: T) => {
  const [activeState, setActiveState] = useState<T>(defaultValue);

  return { activeState, setActiveState };
};
