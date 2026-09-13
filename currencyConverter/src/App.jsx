import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
const BackgroundImage = "../public/Images/image3.jpg";
import { MdSwapVert } from "react-icons/md";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center align-center bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url('${BackgroundImage}')` }}
      >
        <div className="w-full h-screen">
          <div className="w-full max-w-lg mx-auto border border-gray-200 rounded-2xl px-10 py-5 bg-white/40">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <div className="mb-1">
                  <InputBox
                    label="From"
                    amount={amount}
                    onAmountChange={(amount) => setAmount(amount)}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setFrom(currency)}
                    selectCurrency={from}
                  />
                </div>

                <button
                  className="bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-2 text-sm text-white font-bold absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center align-center gap-2"
                  onClick={swap}
                >
                  Swap
                  <MdSwapVert className="w-5 h-5" />
                </button>

                <div className="mb-1">
                  <InputBox
                    label="To"
                    amount={convertedAmount}
                    onAmountChange={(amount) => setAmount(amount)}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setTo(currency)}
                    selectCurrency={to}
                    amountDisable={true}
                  />
                </div>
              </div>

              <div className="mt-3">
                <button
                  type="submit"
                  className="w-full px-10 py-3 text-white font-medium rounded-lg bg-blue-600 hover:bg-blue-700"
                  onClick={convert}
                >
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
