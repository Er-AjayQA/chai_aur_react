import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), todo, completed: false }, ...prev]);
  };

  // Update Todo
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev?.map((prevTodo) =>
        prevTodo?.id === id ? { ...prevTodo, todo } : prevTodo,
      ),
    );
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev?.filter((item) => item?.id !== id));
  };

  // Toggle Todo As Complete
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev?.map((prevTodo) =>
        prevTodo?.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo,
      ),
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
      }}
    >
      <div className="w-full min-h-screen bg-[#172842] py-8">
        <div className="w-full max-w-2xl mx-auto shadow-sm rounded-lg px-4 py-3 text-white">
          <h1 className="text-white text-2xl text-center font-bold">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            <div className="w-full max-w-2xl mx-auto mt-6 space-y-3">
              {todos?.length === 0 ? (
                <div className="text-center py-10 text-gray-400">
                  <p className="text-lg font-medium">No todos yet</p>
                  <p className="text-sm mt-1">Add a task to get started 🚀</p>
                </div>
              ) : (
                todos?.map((todo) => <TodoList key={todo?.id} todo={todo} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
