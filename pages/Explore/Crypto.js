import React, { useState, useEffect } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { useRouter } from "next/router";

const Crypto = () => {
  // const [crypto, setCrypto] = useState();
  const router = useRouter();

  const categories = new Array(3).fill(router.route.split("/")[2]);
  //========================== FOREX API FETCH =================================================

  // useEffect(() => {
  //   getCrypto();
  // }, []);

  // const getCrypto = async () => {
  //   const res = await fetch(
  //     "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=N6AXATLA2U2CFJTK"
  //   );
  //   const data = await res.json();
  //   setForex(data);
  //   console.log(data["Time Series (Digital Currency Daily)"]);
  // };

  // ================== HIGHCHART OPTIONS ===================
  const options = {
    title: {
      text: "crypto",
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
        name: "Current Stock Name",
        data: [
          16438.88, 16739, 45, 16777.54, 16631.5, 17356.96, 17804.01, 17775.82,
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
        //     fillColor: {
        //       linearGradient: {
        //         x1: 0,
        //         y1: 0,
        //         x2: 0,
        //         y2: 1,
        //       },
        //       stops: [
        //         [0, Highcharts.getOptions().colors[0]],
        //         [
        //           1,
        //           Highcharts.color(Highcharts.getOptions().colors[0])
        //             .setOpacity(0)
        //             .get("rgba"),
        //         ],
        //       ],
        //     },
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

  // ======================================================

  return (
    <div className="flex h-full">
      {categories.map((category, i) => (
        <div
          key={i}
          className="flex w-1/3 m-5 transition duration-500 transform shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue hover:cursor-pointer hover:scale-105"
        >
          <div className="w-full h-full">
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Crypto;
