import { useState } from "react";
import { useTodo } from "../contexts";
import { CiEdit } from "react-icons/ci";
import { IoClose, IoSave } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

export default function TodoList({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [todoText, setTodoText] = useState(todo?.todo);

  const { toggleComplete, updateTodo, deleteTodo } = useTodo();

  const handleEdit = (todo) => {
    setTodoText(todo.todo);
    setIsEditable(true);
  };

  const handleUpdateTodo = (id) => {
    if (!todoText.trim()) return;

    updateTodo(id, todoText);

    setIsEditable(false);
    setTodoText(todoText);
  };

  const handleCancel = () => {
    setIsEditable(false);
    setTodoText(todo?.todo);
  };

  return (
    <div
      key={todo?.id}
      className={`group flex items-center gap-3 py-2 px-4 ${todo?.completed ? "bg-green-200" : "bg-violet-100"} rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 
                     transition-all duration-200`}
    >
      {/* Checkbox */}
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo?.completed || false}
          onChange={() => toggleComplete(todo?.id)}
          className="w-4 h-4 cursor-pointer accent-indigo-600"
        />
      </div>

      {/* Todo Text */}
      <div className="flex-1 min-w-0">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleUpdateTodo(todo.id);
            }

            if (e.key === "Escape") {
              handleCancel();
            }
          }}
          autoFocus={!isEditable}
          readOnly={!isEditable}
          className={`w-full px-3 py-2 text-gray-800 bg-gray-50 ${isEditable ? "bg-white/80 border border-indigo-400" : "bg-violet-100"} 
                      rounded-lg outline-none ${todo?.completed ? "line-through text-gray-400" : "text-gray-800"}`}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        {isEditable ? (
          <>
            {/* Save */}
            <button
              onClick={() => handleUpdateTodo(todo?.id)}
              className="p-2 rounded-lg text-green-600 bg-green-50 hover:bg-green-100 transition"
              title="Save"
            >
              <IoSave className="w-4 h-4" />
            </button>

            {/* Cancel */}
            <button
              onClick={handleCancel}
              className="p-2 rounded-lg text-gray-500 bg-gray-100 hover:bg-gray-200 transition"
              title="Cancel"
            >
              <IoClose className="w-4 h-4" />
            </button>
          </>
        ) : (
          /* Edit */
          <button
            onClick={() => handleEdit(todo)}
            className="p-2 rounded-lg text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition"
            title="Edit"
          >
            <CiEdit className="w-4 h-4" />
          </button>
        )}

        {/* Delete */}
        <button
          onClick={() => deleteTodo(todo?.id)}
          className="p-2 rounded-lg text-red-500 bg-red-50 hover:bg-red-100 transition"
          title="Delete"
        >
          <MdDeleteForever className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
