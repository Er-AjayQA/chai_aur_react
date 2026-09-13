import { useEffect } from "react";
import { useCallback, useState, useRef } from "react";

function App() {
  const [passwordLength, setPasswordLength] = useState(6);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null);

  // Password Generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumber) str += "0123456789";
    if (isCharacter) str += "!@#$%^&*()-_+=[]{}~`";

    for (let i = 0; i <= passwordLength; i++) {
      let randomNum = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(randomNum);
    }

    setPassword(pass);
  }, [passwordLength, isNumber, isCharacter, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordLength, isNumber, isCharacter, passwordGenerator]);

  // Copy Password
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(passwordRef.current.value);
  }, [password]);

  return (
    <>
      <div className="w-full h-screen p-5 bg-black space-y-15">
        <h1 className="text-white my-10">Password Generator</h1>
        <div className="w-1/2 mx-auto p-5 rounded-xl bg-gray-600 flex flex-col align-center justify-center gap-10">
          <div className="flex align-center justify-center">
            <input
              type="text"
              value={password}
              className="outline-none border-none w-full rounded-l-lg py-1 px-3"
              placeholder="Password"
              onChange={(e) => setPasswordLength(e.target.value)}
              ref={passwordRef}
              readOnly
            />
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-r-lg"
              onClick={copyPasswordToClipboard}
            >
              Copy
            </button>
          </div>

          <div className="flex align-center justify-center gap-10">
            <div className="flex align-center gap-5">
              <input
                type="range"
                value={passwordLength}
                min={6}
                max={100}
                onChange={(e) => setPasswordLength(e.target.value)}
              />
              <span className="text-white">Length ({passwordLength})</span>
            </div>

            <div className="flex align-center gap-5">
              <input
                type="checkbox"
                id="numbers"
                defaultChecked={isNumber}
                onChange={() => setIsNumber((prev) => !prev)}
              />
              <label htmlFor="numbers" className="text-white">
                Numbers
              </label>
            </div>

            <div className="flex align-center gap-5">
              <input
                type="checkbox"
                id="characters"
                defaultChecked={isCharacter}
                onChange={() => setIsCharacter((prev) => !prev)}
              />
              <label htmlFor="characters" className="text-white">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
