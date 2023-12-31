import { useReducer } from "react";
import TodosReducer from "./TodosReducer";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
export default function App() {
  const [todos, dispatch] = useReducer(TodosReducer, []);
  return (
    <>
      <h1>Todo List</h1>
      <AddTodo dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </>
  );
}