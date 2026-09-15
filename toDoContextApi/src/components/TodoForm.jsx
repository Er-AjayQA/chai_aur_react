import { useState } from "react";
import { useTodo } from "../contexts";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (!todo.trim()) {
      alert("Nothing to add");
      return;
    }

    addTodo(todo);
    setTodo("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <form
      onSubmit={handleAddTodo}
      className="flex items-center gap-2 py-1 px-2 bg-white rounded-xl shadow-md border border-gray-200 focus-within:border-indigo-400
                   focus-within:ring-1 focus-within:ring-indigo-100 transition-all duration-200"
    >
      {/* Input */}
      <input
        type="text"
        placeholder="What needs to be done?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
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
