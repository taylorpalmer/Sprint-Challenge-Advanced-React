import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const coloredText = (initialState) => {
  const [textColor, settextColor] = useLocalStorage("colored", initialState);

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.toggle("colored-text", textColor);
  }, [textColor]);

  return [textColor, settextColor];
};

export default coloredText;
