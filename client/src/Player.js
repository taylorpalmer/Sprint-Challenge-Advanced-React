import React from "react";
import useLocalStorage from "./useLocalStorage";

const Player = (props) => {
  const [textColor, setTextColor] = useLocalStorage(props.player.id, false);

  return (
    <li
      onClick={() => setTextColor(!textColor)}
      className={textColor ? "toggle toggled" : "toggle"}
    >
      {props.player.name}
    </li>
  );
};

export default Player;
