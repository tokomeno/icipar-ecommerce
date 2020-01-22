import { useState } from "react";

export const useSliderNav = (
  length: number,
  defaultCurrentIndex: number = 0
) => {
  const [currentSliderIndex, setCurrentSliderIndex] = useState(
    defaultCurrentIndex
  );

  const sliderNav = (direction: "forward" | "backward") => {
    if (direction === "forward" && currentSliderIndex < length)
      setCurrentSliderIndex(currentSliderIndex + 1);
    else {
      setCurrentSliderIndex(0);
    }
    if (direction === "backward" && currentSliderIndex !== 0)
      setCurrentSliderIndex(currentSliderIndex - 1);
  };

  return { currentSliderIndex, sliderNav };
};
