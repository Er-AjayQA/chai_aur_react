import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, setToLocalStorage } from "../features/todo/todoSlice";

export default function TodoForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    dispatch(setToLocalStorage());
    setTask("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(addTodo(task));
      dispatch(setToLocalStorage());
      setTask("");
    }
  };

  return (
    <form
      onSubmit={handleAddTask}
      className="flex items-center gap-2 py-1 px-2 bg-white rounded-xl shadow-md border border-gray-200 focus-within:border-indigo-400
                   focus-within:ring-1 focus-within:ring-indigo-100 transition-all duration-200"
    >
      {/* Input */}
      <input
        type="text"
        placeholder="What needs to be done?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 min-w-0 px-4 py-3 text-gray-800 placeholder-gray-400 bg-transparent outline-none text-sm"
      />

      {/* Add Button */}
      <button
        type="submit"
        className="px-6 py-3 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 active:scale-95
                     transition-all duration-150 shadow-sm"
      >
        Add
      </button>
    </form>
  );
}
