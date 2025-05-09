// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!currency) return;

//     const fetchData = async () => {
//       try {
//         // ✅ Working API endpoint with dynamic currency
//         const res = await fetch(
//           `http://api.currencylayer.com/live?access_key=a02240caf39bd3d2b42d5a203d8e3123&currencies=${currency.toUpperCase()}`
//         );
//         const json = await res.json();
//         setData(json[currency]); // ⚠️ "currency" key gives actual rates
//       } catch (err) {
//         setError("Failed to fetch currency data.");
//         console.error(err);
//       }
//     };

//     fetchData();
//   }, [currency]);

//   return data;
// }

// export default useCurrencyInfo;


import { useEffect, useState } from "react";

function useCurrancyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use the provided API URL with your access key
        const url = `http://api.currencylayer.com/live?access_key=a02240caf39bd3d2b42d5a203d8e3123&currencies=${currency.toUpperCase()}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData = await response.json();
        if (jsonData.success) {
          setData(jsonData.quotes); // Store the exchange rates in data
        } else {
          throw new Error(jsonData.error.info); // Handle API error messages
        }
      } catch (err) {
        setError(err.message); // Handle any other errors
      }
    };

    fetchData();
  }, [currency]);

  return { data, error }; // Return both the exchange rate data and errors (if any)
}

export default useCurrancyInfo;
