import React, { useEffect } from "react";

import App from "./App";
import Player from "./Player";

const PlayerList = (props) => {
  return (
    <div>
      <ul>
        {props.players.map((player) => (
          <Player player={player} />
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
