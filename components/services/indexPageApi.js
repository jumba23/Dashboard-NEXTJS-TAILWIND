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

const mockData = [
  [1608733800000, 130.96],
  [1608820200000, 131.97],
  [1609165800000, 136.69],
  [1609252200000, 134.87],
  [1609338600000, 133.72],
  [1609425000000, 132.69],
  [1609770600000, 129.41],
  [1609857000000, 131.01],
  [1609943400000, 126.6],
  [1610029800000, 130.92],
  [1610116200000, 132.05],
  [1610375400000, 128.98],
  [1610461800000, 128.8],
  [1610548200000, 130.89],
  [1610634600000, 128.91],
  [1610721000000, 127.14],
  [1611066600000, 127.83],
  [1611153000000, 132.03],
  [1611239400000, 136.87],
  [1611325800000, 139.07],
  [1611585000000, 142.92],
  [1611671400000, 143.16],
  [1611757800000, 142.06],
  [1611844200000, 137.09],
  [1611930600000, 131.96],
  [1612189800000, 134.14],
  [1612276200000, 134.99],
  [1612362600000, 133.94],
  [1612449000000, 137.39],
  [1612535400000, 136.76],
  [1612794600000, 136.91],
  [1612881000000, 136.01],
  [1612967400000, 135.39],
  [1613053800000, 135.13],
  [1613140200000, 135.37],
  [1613485800000, 133.19],
  [1613572200000, 130.84],
  [1613658600000, 129.71],
  [1613745000000, 129.87],
  [1614004200000, 126],
  [1614090600000, 125.86],
  [1614177000000, 125.35],
  [1614263400000, 120.99],
  [1614349800000, 121.26],
  [1614609000000, 127.79],
  [1614695400000, 125.12],
  [1614781800000, 122.06],
  [1614868200000, 120.13],
  [1614954600000, 121.42],
  [1615213800000, 116.36],
  [1615300200000, 121.09],
  [1615386600000, 119.98],
  [1615473000000, 121.96],
  [1615559400000, 121.03],
  [1615815000000, 123.99],
  [1615901400000, 125.57],
  [1615987800000, 124.76],
  [1616074200000, 120.53],
  [1616160600000, 119.99],
  [1616419800000, 123.39],
  [1616506200000, 122.54],
  [1616592600000, 120.09],
  [1616679000000, 120.59],
  [1616765400000, 121.21],
  [1617024600000, 121.39],
  [1617111000000, 119.9],
  [1617197400000, 122.15],
  [1617283800000, 123],
  [1617629400000, 125.9],
  [1617715800000, 126.21],
  [1617802200000, 127.9],
  [1617888600000, 130.36],
  [1617975000000, 133],
  [1618234200000, 131.24],
  [1618320600000, 134.43],
  [1618407000000, 132.03],
  [1618493400000, 134.5],
  [1618579800000, 134.16],
  [1618839000000, 134.84],
  [1618925400000, 133.11],
  [1619011800000, 133.5],
  [1619098200000, 131.94],
  [1619184600000, 134.32],
  [1619443800000, 134.72],
  [1619530200000, 134.39],
  [1619616600000, 133.58],
  [1619703000000, 133.48],
  [1619789400000, 131.46],
  [1620048600000, 132.54],
  [1620135000000, 127.85],
  [1620221400000, 128.1],
  [1620307800000, 129.74],
  [1620394200000, 130.21],
  [1620653400000, 126.85],
  [1620739800000, 125.91],
  [1620826200000, 122.77],
  [1620912600000, 124.97],
  [1620999000000, 127.45],
  [1621258200000, 126.27],
  [1621344600000, 124.85],
];

const filterStockDailyHistory = (data) => {
  // console.log(mockData);
  let counter = 0;

  const finalHistoricalDataArray = [];
  for (let entry in data["Time Series (Daily)"]) {
    counter++;
    if (counter < 501) {
      let tempArray = [];
      // console.log(data["Time Series (Daily)"][entry]["1. open"]);

      let date = new Date(entry).getTime();
      tempArray.push(date);
      tempArray.push(parseFloat(data["Time Series (Daily)"][entry]["1. open"]));
      finalHistoricalDataArray.push(tempArray);
    }
  }
  console.log(finalHistoricalDataArray);

  return finalHistoricalDataArray;
};
export { getIndexCardsApiData, getHistoricalModalData };
