import React, { useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { useRouter } from "next/router";

const Stocks = () => {
  // const [stocks, setStocks] = useState();
  const router = useRouter();
  const categories = new Array(3).fill(router.route.split("/")[2]);

  // ================== HIGHCHART OPTIONS ===================
  const options = {
    title: {
      text: "stocks",
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
          140.06, 139.99, 139.8811, 139.88, 140.16, 140.07, 139.94, 139.31,
          139.21, 139.135, 139.04, 139.22, 139.31,
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
      // Edit chart spacing
      // spacingBottom: 15,
      // spacingTop: 10,
      // spacingLeft: 10,
      // spacingRight: 10,
      // Explicitly tell the width and height of a chart

      // OTHER OFFICE
      width: 350,
      height: 335,

      // DOWNTOWN OFFICE
      // width: 450,
      // height: 450,
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

  // ================ STOCKS API FETCH ==================================

  // useEffect(() => {
  //   getStocks();
  // }, []);

  // const getStocks = async () => {
  //   const res = await fetch(
  //     "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=N6AXATLA2U2CFJTK"
  //   );
  //   const data = await res.json();
  //   setStocks(data);
  //   console.log(data);
  // };

  // ====================================================================

  return (
    <div className="flex h-full">
      {categories.map((category, i) => (
        <div
          key={i}
          className="flex w-1/3 m-5 transition duration-500 transform shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue hover:cursor-pointer hover:scale-105"
        >
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      ))}
    </div>
  );
};

export default Stocks;
