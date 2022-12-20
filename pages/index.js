import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const exploreCategories = ["Stocks", "Forex", "Crypto"];

  // ================================= HIGHCHART =========================

  const options = {
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
      tickInterval: 3, // sets xAxis data points
    },
    yAxis: {
      // tickInterval: 5,
      labels: {
        format: "${text}", // The $ is literally a dollar unit
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
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [
              1,
              Highcharts.color(Highcharts.getOptions().colors[0])
                .setOpacity(0)
                .get("rgba"),
            ],
          ],
        },
      },
    ],
    chart: {
      // Edit chart spacing
      spacingBottom: 15,
      spacingTop: 10,
      spacingLeft: 10,
      spacingRight: 10,
      // Explicitly tell the width and height of a chart
      width: 350,
      height: 335,
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

  // ====================================================================

  return (
    <>
      <Head>
        <title>Dashboard Next</title>
        <meta name="description" content="Finance App Dashboard" />
        <link rel="icon" href="/favicon.ico" />
        <title>Orion App</title>
      </Head>
      <main className="w-full h-full bg-blue-500">
        <div className="flex h-full">
          {exploreCategories.map((category) => (
            <Link
              href={`/Explore/${category}`}
              className="flex w-1/3 m-5 transition duration-500 transform shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue hover:cursor-pointer hover:scale-105"
            >
              <HighchartsReact highcharts={Highcharts} options={options} />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
