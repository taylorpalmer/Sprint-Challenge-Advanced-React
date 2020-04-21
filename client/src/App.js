import React from "react";
import axios from "axios";
import "./App.css";
import PlayerList from "./PlayerList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then((res) => {
        const players = res.data;
        console.log(players);
        this.setState({ players });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>Players</h2>
        <PlayerList />
      </div>
    );
  }
}
export default App;
