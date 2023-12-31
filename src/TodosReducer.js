const TodosReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...state, { id: Date.now(), text: action.payload, edit: false }];
      case "DELETE_TODO":
        return state.filter((todo) => todo.id !== action.payload);
  
      case "EDIT":
        return state.map((todo) =>
          todo.id === action.payload ? { ...todo, edit: !todo.edit } : todo
        );
  
      case "UPDATE":
        return state.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        );
      default:
        return state;
    }
  };
  
  export default TodosReducer;
  