const baseURL = "https://www.alphavantage.co/query?function=";
const NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
const stockIntaDay = `TIME_SERIES_INTRADAY&symbol=IBM&interval=30min&apikey=${NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`;
const forexDailyEuUs = `FX_DAILY&from_symbol=EUR&to_symbol=USD&outputsize=compact&apikey=${NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`;
const cryptoDailyBitcoin = `DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=${NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`;
const stockDailyHistory = `TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=full&apikey=${NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`;

// ============================= FETCH INDEX PAGE - 3 CARDS - STOCK, FOREX, AND CRYPTO APIs =================================================

const getIndexCardsApiData = async () => {
  const resStock = await fetch(`${baseURL}${stockIntaDay}`);
  const rawStockData = await resStock.json();
  // const resForex = await fetch(`${baseURL}${forexDailyEuUs}`);
  // const rawForexData = await resForex.json();
  // const resCrypto = await fetch(`${baseURL}${cryptoDailyBitcoin}`);
  // const rawCryptoData = await resCrypto.json();
  const filteredStockCardData = filterStockIntraDay(rawStockData);
  // console.log(rawStockData);
  // const finalForexData = filterForexDaily(rawForexData);
  // console.log(rawCryptoData);
  // const finalCryptoData = filterCryptoDaily(rawCryptoData);

  //   console.log(finalCryptoData);

  return { filteredStockCardData };
};

// ============================= FETCH MODAL - INDEX PAGE =================================================

const getHistoricalModalData = async () => {
  const resStock = await fetch(`${baseURL}${stockDailyHistory}`);
  const rawStockData = await resStock.json();
  console.log(rawStockData);
  const filteredStockModalData = filterStockDailyHistory(rawStockData);
  // const finalForexData = filterForexDaily(rawForexData);
  // console.log(rawCryptoData);
  // const finalCryptoData = filterCryptoDaily(rawCryptoData);

  //   console.log(finalCryptoData);

  return { filteredStockModalData };
};

// ============================= FILTER API DATA FOR CARDS - INDEX PAGE =================================================

const filterStockIntraDay = (stock) => {
  // FILTER FOR BASIC INDEX CARDS

  // get stock name
  console.log(stock);
  const stockName = stock["Meta Data"]["2. Symbol"];

  // create an array from object entry (keys)
  const allDates = Object.keys(stock["Time Series (30min)"]);

  // create an array from object entry (values)
  const allValues = Object.values(stock["Time Series (30min)"]);

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
  let finalHistoricalDataArrayLength;
  if (entriesCounter > 14) {
    finalHistoricalDataArrayLength = 14;
  } else {
    finalHistoricalDataArrayLength = entriesCounter;
  }

  // create a new array with the length using the step above (how many data points for most recent day)
  const onlyMostRecentValues = allValues.slice(
    0,
    finalHistoricalDataArrayLength
  );

  // get the final array
  const yArray = [];
  onlyMostRecentValues.map((e) => {
    // convert string data point into a number with parse method
    e = parseFloat(e["1. open"]);
    yArray.push(e);
  });

  // FILTER FOR MODAL

  // need another API fetch for more in dept view https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=full&apikey=demo

  // get all dates and times (current date & time format)

  // convert those dates & times into milliseconds and into number values

  return { stockName, yArray };
};

// const filterForexDaily = (forex) => {
//   // get currency names
//   const currencyOne = forex["Meta Data"]["2. From Symbol"];
//   const currencyTwo = forex["Meta Data"]["3. To Symbol"];
//   const currencies = { one: currencyOne, two: currencyTwo };

//   // create an array from object entry (values)
//   const allValues = Object.values(forex["Time Series FX (Daily)"]);

//   // create a new array with the length using the step above (how many data points for most recent day)
//   const onlyMostRecentValues = allValues.slice(0, 14);

//   // get the final array
//   const yArray = [];
//   onlyMostRecentValues.map((e) => {
//     // convert string data point into a number with parse method
//     e = parseFloat(e["1. open"]);
//     yArray.push(e);
//   });

//   return { currencies, yArray };
// };

// const filterCryptoDaily = (crypto) => {
//   // get crypto name
//   const cryptoName = crypto["Meta Data"]["3. Digital Currency Name"];

//   // create an array from object entry (values)
//   const allValues = Object.values(
//     crypto["Time Series (Digital Currency Daily)"]
//   );

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

const filterStockDailyHistory = (data) => {
  const finalHistoricalDataArray = [];
  for (let entry in data["Time Series (Daily)"]) {
    let tempArray = [];
    // console.log(data["Time Series (Daily)"][entry]["1. open"]);
    // console.log(entry);

    let date = new Date(entry).getTime();
    tempArray.push(date);
    tempArray.push(parseFloat(data["Time Series (Daily)"][entry]["1. open"]));
    finalHistoricalDataArray.push(tempArray);
  }
  console.log(finalHistoricalDataArray);
  return finalHistoricalDataArray;
};
export { getIndexCardsApiData, getHistoricalModalData };
