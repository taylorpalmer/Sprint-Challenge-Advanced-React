import React from "react";
import axios from "axios";
import "./App.css";
import toggleColor from "./toggleColor";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      toggleColor: false,
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

  toggleMode = (e) => {
    e.preventDefault();
    this.setState({ toggleColor: !toggleColor });
  };

  render() {
    return (
      <div>
        <h2>Players</h2>
        <div
          onClick={this.toggleMode}
          className={toggleColor ? "toggle toggled" : "toggle"}
        >
          <ul>
            {this.state.players.map((player) => (
              <li>{player.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
