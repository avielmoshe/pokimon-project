import { useState, useRef } from "react";
import "./Input.css";
import { Link } from "react-router-dom";

function Input() {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(inputRef.current.value);

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
        <Link to={`/pokemonByName/${text}`}>
          <button type="submit">Search</button>
        </Link>
      </form>
    </>
  );
}

export default Input;
