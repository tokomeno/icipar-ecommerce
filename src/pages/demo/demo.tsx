import React from "react";
import classnames from "classnames";

interface DemoProps {
  Demo: number;
}

export const Demo: React.FC<DemoProps> = ({ Demo }) => {
  return (
    <div className="Demo">
      <div>123</div>
    </div>
  );
};
