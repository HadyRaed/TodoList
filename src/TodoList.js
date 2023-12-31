import { useState } from "react";
function TodoList({ todos, dispatch }) {
  const [editTxt, setEditTxt] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setEditTxt("");
  };
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.edit ? (
            <>
              <h1>Edit "{todo.text}"</h1>
              <form onSubmit={handleSubmit}>
                <input onChange={(e) => setEditTxt(e.target.value)}></input>
                <button
                  onClick={() => {
                    dispatch({ type: "EDIT", payload: todo.id });
                    dispatch({
                      type: "UPDATE",
                      payload: { id: todo.id, text: editTxt },
                    });
                  }}
                >
                  Edit
                </button>
              </form>
            </>
          ) : (
            <>
              <h1>{todo.text}</h1>
              <button
                onClick={() => dispatch({ type: "EDIT", payload: todo.id })}
              >
                Edit
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_TODO", payload: todo.id })
                }
              >
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
export default TodoList;