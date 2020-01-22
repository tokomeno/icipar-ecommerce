import { useState, useCallback } from "react";

export const useInput = (
  defaultValue: string | number = "",
  cb?: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void
) => {
  const [value, setInputName] = useState(defaultValue + "");
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (cb) {
        cb(e, e.target.value);
      }
      setInputName(e.target.value);
    },
    [cb]
  );
  return { value, onChange };
};
