import React, { useState, useEffect } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { useRouter } from "next/router";

const Forex = () => {
  // const [forex, setForex] = useState();
  const router = useRouter();
  const categories = new Array(3).fill(router.route.split("/")[2]);

  //========================== FOREX API FETCH =================================================

  // useEffect(() => {
  //   getForex();
  // }, []);

  // const getForex = async () => {
  //   const res = await fetch(
  //     "https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=EUR&to_symbol=USD&outputsize=compact&apikey=N6AXATLA2U2CFJTK"
  //   );
  //   const data = await res.json();
  //   setForex(data);
  //   console.log(data["Time Series FX (Daily)"]);
  // };

  // ================== HIGHCHART OPTIONS ===================
  const options = {
    title: {
      text: "forex",
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
          1.06094, 1.0588, 1.0625, 1.06812, 1.06317, 1.05355, 1.05281, 1.05542,
          1.05048, 1.0466, 1.04902, 1.053, 1.05258,
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
      spacingBottom: 15,
      spacingTop: 10,
      spacingLeft: 10,
      spacingRight: 10,
      // Explicitly tell the width and height of a chart
      // OTHER OFFICE
      // width: 350,
      // height: 335,

      // DOWNTOWN OFFICE
      width: 450,
      height: 450,
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

  https: return (
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

export default Forex;
