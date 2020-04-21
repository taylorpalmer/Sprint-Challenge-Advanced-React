import React from "react";
import useLocalStorage from "./hooks";

export default function SearchForm(props) {
  console.log(props);
  const [formState, setFormState] = useLocalStorage("form", {
    name: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formState.name);
  };

  return (
    <section className="search-form">
      <div>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            type="text"
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            placeholder="Search Players"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
}
