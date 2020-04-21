import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const toggleColor = (initialState) => {
  const [textColor, setTextColor] = useLocalStorage("colored", initialState);

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.toggle("colored-text", textColor);
  }, [textColor]);

  return [textColor, setTextColor];
};

export default toggleColor;
