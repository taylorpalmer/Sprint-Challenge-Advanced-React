import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

import App from "./App";

const PlayerList = (props) => {
  const ToggleColor = (initialState) => {
    const [textColor, setTextColor] = useLocalStorage("colored", initialState);

    useEffect(() => {
      const body = document.querySelector("body");
      body.classList.toggle("colored-text", textColor);
    }, [textColor]);

    return [textColor, setTextColor];
  };

  const [textColor, setTextColor] = ToggleColor(false);
  const toggleMode = (e) => {
    e.preventDefault();
    setTextColor(!textColor);
  };

  return (
    <div>
      <ul>
        {props.players.map((player) => (
          <li
            onClick={toggleMode}
            className={ToggleColor ? "toggle toggled" : "toggle"}
          >
            {player.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
