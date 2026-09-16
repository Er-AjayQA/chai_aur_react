import { createSlice, nanoid } from "@reduxjs/toolkit";

function getFromLocalstorage() {
  return JSON.parse(localStorage.getItem("todoList")) || [];
}

const initialState = {
  todos: getFromLocalstorage(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        task: action.payload,
        completed: false,
      });
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo?.id === action.payload.id
          ? { ...todo, task: action.payload.task }
          : todo,
      );
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    toggleCompleted: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo?.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    },

    setToLocalStorage: (state, action) => {
      localStorage.setItem("todoList", JSON.stringify(state.todos));
    },
  },
});

export const {
  addTodo,
  updateTodo,
  deleteTodo,
  toggleCompleted,
  setToLocalStorage,
} = todoSlice.actions;

export default todoSlice.reducer;
