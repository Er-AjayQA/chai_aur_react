import { useEffect, useState } from "react";

function useCurrencyInfo(currency = "usd") {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setData(result[currency]);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
