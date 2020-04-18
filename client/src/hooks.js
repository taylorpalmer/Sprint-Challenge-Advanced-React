import { useState } from "react";

export const useLocalStorage = (key) => {
  const [value, setValue] = useState(window.localStorage.getItem(key));

  const handleChanges = (e) => {
    setValue(value);
    window.localStorage.setItem(key, e.target.value);
  };

  return [value, setValue, handleChanges];
};
