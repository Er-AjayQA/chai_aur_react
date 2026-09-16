import { useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const todos = useSelector((state) => state.todos);

  return (
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
  );
}

export default App;
