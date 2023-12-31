import { useState } from "react";
export default function AddTodo({ dispatch }) {
  const [text, setText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text) {
      dispatch({ type: "ADD_TODO", payload: text });
      setText("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
