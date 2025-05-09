// import { useState, useEffect } from "react";

// export function useCurrencyInfo(currency){

//   const [data, setData] = useState({})

//   useEffect( ()=>{
//     let url = `https://v6.exchangerate-api.com/v6/c86b4098bd1bb7c01ee01fa5/latest/${currency}`
//     fetch(url)
//     .then((res)=> res.json())
//     .then((res)=> setData(res.currency))
//     console.log(data);
    
//   }, [currency,])
//   console.log(data);
//   return data
// }

// export default useCurrencyInfo



import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `https://v6.exchangerate-api.com/v6/c86b4098bd1bb7c01ee01fa5/latest/${currency}`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.conversion_rates) {
          setData(res.conversion_rates);
        } else {
          console.error("API returned unexpected structure:", res);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
