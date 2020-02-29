import { useState, useCallback } from "react";

export const useInput = (defaultValue: string | number = "") => {
  const [value, setInputName] = useState(defaultValue + "");
  const onChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLSelectElement>
        | React.ChangeEvent<HTMLTextAreaElement>
        | string
        | number
        | undefined
        | null
    ) => {
      if (typeof e === "string" || typeof e === "number") {
        setInputName(e + "");
        return;
      }
      if (typeof e === "undefined" || e === null) {
        setInputName("");
        return;
      }
      setInputName(e.target.value);
    },
    []
  );
  return { value, onChange };
};
