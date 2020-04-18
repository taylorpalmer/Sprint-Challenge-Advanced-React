import React from "react";
import { useLocalStorage } from "./hooks";

export default function SearchForm(props) {
  const [formState, setFormState, handleChanges] = useLocalStorage({
    name: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formState);
  };

  return (
    <section className="search-form">
      <div>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            type="text"
            value={formState.name}
            onChange={handleChanges}
            placeholder="Search Players"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
}
