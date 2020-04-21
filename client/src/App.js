import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      search: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then((res) => {
        const players = res.data;
        this.setState({ players });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>Players</h2>
        <ul>
          {this.state.players.map((player) => (
            <li>{player.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
