import { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2 className="mb-8">Login</h2>
      <div className="w-1/2 p-5 py-10 mx-auto flex flex-col align-center justify-center gap-5 border border-gray-500 rounded-lg">
        <input
          type="text"
          value={username}
          placeholder="username"
          className="border border-gray-400 py-2 focus:outline-blue-300 px-5 rounded-lg"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          className="border border-gray-400 py-2 focus:outline-blue-300 px-5 rounded-lg"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-10 py-2 rounded-lg bg-blue-400 hover:bg-gray-400 text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Login;
