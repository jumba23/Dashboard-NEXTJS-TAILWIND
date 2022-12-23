import React, { Fragment, useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { getApiData } from "../components/services/indexPageApi";
import Head from "next/head";
// import Link from "next/link";
import { Modal } from "../components/Modal";

export default function Home() {
  const [stockData, setStockData] = useState({});
  // const [forexData, setForexData] = useState({});
  // const [cryptoData, setCryptoData] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    const res = await getApiData();
    console.log(res);
    setStockData(res["finalStockData"]);
    // setForexData(res["finalForexData"]);
    // setCryptoData(res["finalCryptoData"]);
  };

  console.log(stockData);
  // console.log(forexData);
  // console.log(cryptoData);

  // console.log(typeof forexData != "undefined");
  // const exploreCategories = ["Stocks", "Forex", "Crypto"];

  // ================================= HIGHCHART -STOCKS =========================

  const optionsStock = {
    title: {
      text: `Stocks (${stockData.stockName})`,
    },
    xAxis: {
      // max: 12,
      categories: [
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
      ],
      crosshair: {
        width: 2,
        color: "gray",
        dashStyle: "shortdot",
      },
      tickInterval: 3, // sets xAxis data points
    },
    yAxis: {
      // tickInterval: 5,
      labels: {
        enabled: false,
        //   format: "${text}", // The $ is literally a dollar unit
      },
      gridLineWidth: 0, // Remove background line charts
      title: {
        text: "",
      },
    },
    series: [
      {
        data: stockData.yArray,
        type: "areaspline",
        threshold: null,
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: false,
            },
          },
        },
      },
    ],
    chart: {
      height: "105%",
    },
    // removes Highcharts.com
    credits: {
      enabled: false,
    },
    // removes legend below x-axis
    legend: {
      enabled: false,
    },
  };
  // ================================= HIGHCHART - FOREX =========================

  const optionsForex = {
    // title: {
    //   text: `${forexData.currencies.one} to ${forexData.currencies.two}`,
    // },
    title: {
      text: "Forex",
    },
    xAxis: {
      // max: 12,
      categories: [
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
      ],
      crosshair: {
        width: 2,
        color: "gray",
        dashStyle: "shortdot",
      },
      tickInterval: 3, // sets xAxis data points
    },
    yAxis: {
      // tickInterval: 5,
      labels: {
        enabled: false,
        //   format: "${text}", // The $ is literally a dollar unit
      },
      gridLineWidth: 0, // Remove background line charts
      title: {
        text: "",
      },
    },
    series: [
      {
        // data: forexData.yArray,
        data: [
          1.06094, 1.0588, 1.0625, 1.06812, 1.06317, 1.05355, 1.05281, 1.05542,
          1.05048, 1.0466, 1.04902, 1.05341, 1.05258,
        ],
        type: "areaspline",
        threshold: null,
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: false,
            },
          },
        },
      },
    ],
    chart: {
      height: "105%",
    },
    // removes Highcharts.com
    credits: {
      enabled: false,
    },
    // removes legend below x-axis
    legend: {
      enabled: false,
    },
  };
  // ================================= HIGHCHART - CRYPTO =========================

  const optionsCrypto = {
    // title: {
    //   text: cryptoData.cryptoName,
    // },
    title: {
      text: "Crypto",
    },
    xAxis: {
      // max: 12,
      categories: [
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
      ],
      crosshair: {
        width: 2,
        color: "gray",
        dashStyle: "shortdot",
      },
      tickInterval: 3, // sets xAxis data points
    },
    yAxis: {
      // tickInterval: 5,
      labels: {
        enabled: false,
        //   format: "${text}", // The $ is literally a dollar unit
      },
      gridLineWidth: 0, // Remove background line charts
      title: {
        text: "",
      },
    },
    series: [
      {
        // data: cryptoData.yArray,
        data: [
          16438.88, 16739, 16777.54, 16631.5, 17356.96, 17804.01, 17775.82,
          17208.93, 17085.05, 17127.49, 17128.56, 17224.14, 16836.64, 17088.96,
        ],
        type: "areaspline",
        threshold: null,
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: false,
            },
          },
        },
      },
    ],
    chart: {
      height: "105%",
    },
    // removes Highcharts.com
    credits: {
      enabled: false,
    },
    // removes legend below x-axis
    legend: {
      enabled: false,
    },
  };

  // ================================= HIGHCHART - MODAL - STOCK ==================

  const optionsModalStock = {
    rangeSelector: {
      selected: 1,
    },

    title: {
      text: stockData.stockName,
    },

    series: [
      {
        name: "AAPL Stock Price",
        data: stockData.yArray,
        type: "areaspline",
        threshold: null,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
    // chart: {
    //   width: 1000,
    //   height: "60%",
    // },
  };

  // ==============================================================================

  return (
    <Fragment>
      <Head>
        <title>Dashboard Next</title>
        <meta name="description" content="Finance App Dashboard" />
        <link rel="icon" href="/favicon.ico" />
        <title>Orion App</title>
      </Head>
      <main className="w-full h-full bg-blue-500">
        <div className="flex h-full">
          <div
            // href={`/Explore/Stocks`}
            className="flex w-1/3 m-5 transition duration-500 transform border-2 shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue hover:cursor-pointer hover:scale-105"
          >
            {stockData != undefined ? (
              <div className="w-full h-full" onClick={() => setShowModal(true)}>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={optionsStock}
                />
              </div>
            ) : null}
          </div>
          <div
            // href={`/Explore/Forex`}
            className="flex w-1/3 m-5 transition duration-500 transform border-2 shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue hover:cursor-pointer hover:scale-105"
          >
            {/* {forexData != undefined && ( */}
            <div className="w-full h-full" onClick={() => setShowModal(true)}>
              <HighchartsReact highcharts={Highcharts} options={optionsForex} />
            </div>
            {/* )} */}
          </div>
          <div
            // href={`/Explore/Crypto`}
            className="flex w-1/3 m-5 transition duration-500 transform border-2 shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue hover:cursor-pointer hover:scale-105"
          >
            {/* {cryptoData != undefined ? ( */}
            <div className="w-full h-full" onClick={() => setShowModal(true)}>
              <HighchartsReact
                highcharts={Highcharts}
                options={optionsCrypto}
              />
            </div>
            {/* ) : null} */}
          </div>
        </div>
      </main>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        {/* <div className="flex w-full h-full shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue"> */}
        <div
          className="flex w-full h-full border-2 shadow-xl shadow-sky-800"
          onClick={() => setShowModal(true)}
        >
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"stockChart"}
            options={optionsModalStock}
            containerProps={{ style: { width: "80vw" } }}
          />
        </div>
        {/* </div> */}
      </Modal>
    </Fragment>
  );
}
