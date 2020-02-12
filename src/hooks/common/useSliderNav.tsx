import { useState, useCallback } from "react";

export type ISliderNav = (direction: "forward" | "backward") => void;

export const useSliderNav = (
  length: number,
  defaultCurrentIndex: number = 0
) => {
  const [currentSliderIndex, setCurrentSliderIndex] = useState(
    defaultCurrentIndex
  );

  const sliderNav: ISliderNav = useCallback(
    (direction: "forward" | "backward") => {
      if (direction === "forward" && currentSliderIndex < length)
        setCurrentSliderIndex(currentSliderIndex + 1);
      else {
        setCurrentSliderIndex(0);
      }
      if (direction === "backward" && currentSliderIndex !== 0)
        setCurrentSliderIndex(currentSliderIndex - 1);
    },
    [currentSliderIndex, setCurrentSliderIndex, length]
  );

  return { currentSliderIndex, sliderNav };
};
