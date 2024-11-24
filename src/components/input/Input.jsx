import { useState, useRef } from "react";
import "./Input.css";

function Input() {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(inputRef.current.value);
    const url = `https://pokeapi.co/api/v2/pokemon/${text}`;

    inputRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-div">
          <label htmlFor="input">Type Name</label>
          <input
            ref={inputRef}
            type="text"
            name="input"
            id="Name"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>{" "}
      </form>
    </>
  );
}

export default Input;
