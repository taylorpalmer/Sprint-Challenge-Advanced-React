import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SearchForm from "./SearchForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders SearchForm", async () => {
  const { getByText } = render(<SearchForm />);

  const search = getByText(/search/i);

  expect(search).toBeInTheDocument();
});

test("displays players list", () => {
  const container = render(<App />);
  container.getByText(/{players.name}/i);
});

test("displays players title", () => {
  const container = render(<App />);
  container.getByText(/players/i);
});
