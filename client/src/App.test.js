import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("player from list displays", () => {
  const { getByText } = render(<App />);

  getByText(/julie ertz/i);
});

test("toggles text to red", () => {
  const { getByText } = render(<App />);

  const li = getByText(/toggle/i);
  fireEvent.click(li);

  const color = getByText(/color/i);
  expect(color.textContent).toContain("red");
});
