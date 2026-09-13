import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#fff");

  const handleButton = (color) => {
    setColor(color);
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="absolute bottom-0 left-[50%] -translate-x-[50%] p-4 rounded-xl flex justify-center gap-10 bg-white shadow-md mb-5">
        <button
          className="py-1 px-5 rounded-full shadow-lg text-xs text-white bg-red-500"
          onClick={() => handleButton("#ef4444")}
        >
          Red
        </button>
        <button
          className="py-1 px-5 rounded-full shadow-lg text-xs text-white bg-green-500"
          onClick={() => handleButton("#22c55e")}
        >
          Green
        </button>
        <button
          className="py-1 px-5 rounded-full shadow-lg text-xs text-white bg-blue-500"
          onClick={() => handleButton("#3b82f6")}
        >
          Blue
        </button>
        <button
          className="py-1 px-5 rounded-full shadow-lg text-xs text-white bg-[#808000]"
          onClick={() => handleButton("#808000")}
        >
          Olive
        </button>
        <button
          className="py-1 px-5 rounded-full shadow-lg text-xs text-white bg-gray-500"
          onClick={() => handleButton("#6b7280")}
        >
          Gray
        </button>
        <button
          className="py-1 px-5 rounded-full shadow-lg text-xs text-white bg-yellow-500"
          onClick={() => handleButton("#eab308")}
        >
          Yellow
        </button>
        <button
          className="py-1 px-5 rounded-full shadow-lg text-xs text-white bg-pink-500"
          onClick={() => handleButton("#ec4899")}
        >
          Pink
        </button>
        <button
          className="py-1 px-5 rounded-full shadow-lg text-xs text-white bg-purple-500"
          onClick={() => handleButton("#a855f7")}
        >
          Purple
        </button>
        <button
          className="py-1 px-5 rounded-full shadow-lg text-xs text-balck bg-[#e6e6fa]"
          onClick={() => handleButton("#e6e6fa")}
        >
          Lavender
        </button>
        <button
          className="py-1 px-5 rounded-full shadow-lg text-xs text-black bg-white"
          onClick={() => handleButton("#fff")}
        >
          White
        </button>
        <button
          className="py-1 px-5 rounded-full shadow-lg text-xs text-white bg-black"
          onClick={() => handleButton("#000")}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
