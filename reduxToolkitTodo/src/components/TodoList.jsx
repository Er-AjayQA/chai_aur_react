import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoClose, IoSave } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  updateTodo,
  deleteTodo,
  toggleCompleted,
  setToLocalStorage,
} from "../features/todo/todoSlice";

export default function TodoList({ todo }) {
  const dispatch = useDispatch();

  const [isEditable, setIsEditable] = useState(false);
  const [taskText, setTaskText] = useState(todo?.task);

  const handleEdit = () => {
    setTaskText(taskText);
    setIsEditable(true);
  };

  const handleUpdateTodo = (id) => {
    if (!taskText.trim()) return;
    dispatch(updateTodo({ id, task: taskText }));
    dispatch(setToLocalStorage());

    setIsEditable(false);
    setTaskText(taskText);
  };

  const handleCancel = () => {
    setIsEditable(false);
    setTaskText(todo?.task);
  };

  const handleToggle = (id) => {
    dispatch(toggleCompleted(id));
    dispatch(setToLocalStorage());
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    dispatch(setToLocalStorage());
  };

  return (
    <div
      key={todo?.id}
      className={`group flex items-center gap-3 py-2 px-4 ${todo?.completed ? "bg-green-100" : "bg-violet-100"} rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 
                     transition-all duration-200`}
    >
      {/* Checkbox */}
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo?.completed || false}
          onChange={() => handleToggle(todo?.id)}
          className="w-4 h-4 cursor-pointer accent-indigo-600"
        />
      </div>

      {/* Todo Text */}
      <div className="flex-1 min-w-0">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
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
          className={`w-full px-3 py-2 text-gray-800 bg-gray-50 ${todo?.completed ? "bg-green-100" : isEditable ? "bg-white/80 border border-indigo-400" : "bg-violet-100"} 
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
          !todo?.completed && (
            <button
              onClick={() => handleEdit()}
              className="p-2 rounded-lg text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition"
              title="Edit"
            >
              <CiEdit className="w-4 h-4" />
            </button>
          )
        )}

        {/* Delete */}
        <button
          onClick={() => handleDelete(todo?.id)}
          className="p-2 rounded-lg text-red-500 bg-red-50 hover:bg-red-100 transition"
          title="Delete"
        >
          <MdDeleteForever className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
