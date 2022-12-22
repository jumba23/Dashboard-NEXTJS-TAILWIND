const baseURL = "https://www.alphavantage.co/query?function=";
const NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
const stock = `TIME_SERIES_INTRADAY&symbol=IBM&interval=30min&apikey=${NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`;
const forex = `FX_DAILY&from_symbol=EUR&to_symbol=USD&outputsize=compact&apikey=${NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`;
// const crypto = `DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=${NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`;

// ============================= FETCH APIs =================================================

const getApiData = async () => {
  const resStock = await fetch(`${baseURL}${stock}`);
  const rawStockData = await resStock.json();
  const resForex = await fetch(`${baseURL}${forex}`);
  const rawForexData = await resForex.json();
  //   const resCrypto = await fetch(`${baseURL}${crypto}`);
  //   const rawCryptoData = await resCrypto.json();
  const finalStockData = filterStockIntraDay(rawStockData);
  const finalForexData = filterForexDaily(rawForexData);
  //   console.log(rawCryptoData);
  //   const finalCryptoData = filterCryptoDaily(rawCryptoData);

  //   console.log(finalCryptoData);

  return { finalStockData, finalForexData };
};

// ============================= FILTER API DATA =================================================

const filterStockIntraDay = (data) => {
  // get stock name
  const stockName = data["Meta Data"]["2. Symbol"];

  // create an array from object entry (keys)
  const allDates = Object.keys(data["Time Series (30min)"]);

  // create an array from object entry (values)
  const allValues = Object.values(data["Time Series (30min)"]);

  // iterate over all dates and return a new array with only dates (string time entries are removed)
  const mostRecentOrToday = allDates.map((e) => {
    e = e.split(" ")[0];
    return e;
  });
  // count how many data points are there for the most recent date
  let entriesCounter = 0;
  mostRecentOrToday.map((e) => {
    if (e === mostRecentOrToday[0]) {
      entriesCounter++;
    }
  });

  //check for the final arrays length
  let finalArrayLength;
  if (entriesCounter > 14) {
    finalArrayLength = 14;
  } else {
    finalArrayLength = entriesCounter;
  }

  // create a new array with the length using the step above (how many data points for most recent day)
  const onlyMostRecentValues = allValues.slice(0, finalArrayLength);

  // get the final array
  const yArray = [];
  onlyMostRecentValues.map((e) => {
    // convert string data point into a number with parse method
    e = parseFloat(e["1. open"]);
    yArray.push(e);
  });

  return { stockName, yArray };
};

const filterForexDaily = (data) => {
  // get currency names
  const currencyOne = data["Meta Data"]["2. From Symbol"];
  const currencyTwo = data["Meta Data"]["3. To Symbol"];
  const currencies = { one: currencyOne, two: currencyTwo };

  // create an array from object entry (values)
  const allValues = Object.values(data["Time Series FX (Daily)"]);

  // create a new array with the length using the step above (how many data points for most recent day)
  const onlyMostRecentValues = allValues.slice(0, 14);

  // get the final array
  const yArray = [];
  onlyMostRecentValues.map((e) => {
    // convert string data point into a number with parse method
    e = parseFloat(e["1. open"]);
    yArray.push(e);
  });

  return { currencies, yArray };
};

// const filterCryptoDaily = (data) => {
//   // get crypto name
//   const cryptoName = data["Meta Data"]["3. Digital Currency Name"];

//   // create an array from object entry (values)
//   const allValues = Object.values(data["Time Series (Digital Currency Daily)"]);

//   // create a new array with the length using the step above (how many data points for most recent day)
//   const onlyMostRecentValues = allValues.slice(0, 14);

//   // get the final array
//   const yArray = [];
//   onlyMostRecentValues.map((e) => {
//     // convert string data point into a number with parse method
//     e = parseFloat(e["1a. open (CNY)"]);
//     yArray.push(e);
//   });

//   return { cryptoName, yArray };
// };

export { getApiData };