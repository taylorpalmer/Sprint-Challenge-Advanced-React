import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const PlayerList = () => {
  const ToggleColor = (initialState) => {
    const [textColor, setTextColor] = useLocalStorage("colored", initialState);

    useEffect(() => {
      const body = document.querySelector("body");
      body.classList.toggle("colored-text", textColor);
    }, [textColor]);

    return [textColor, setTextColor];
  };

  const toggleMode = (e) => {
    e.preventDefault();
    this.setState({ toggleColor: !ToggleColor });
  };

  return (
    <div
      onClick={toggleMode}
      className={ToggleColor ? "toggle toggled" : "toggle"}
    >
      <ul>
        {this.state.players.map((player) => (
          <li>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
