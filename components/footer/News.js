// import React, { useEffect, useState } from "react";

const News = () => {
  // const [news, setNews] = useState();

  // useEffect(() => {
  //   getNews();
  // }, []);

  // const getNews = async () => {
  //   const res = await fetch(
  //     "https://api.marketaux.com/v1/news/all?symbols=TSLA,AMZN,MSFT&filter_entities=true&language=en&api_token=KD8Q3G9XskvR3i93hG6p9JbNa61mpopEeO7CAxd4"
  //   );
  //   const data = await res.json();
  //   setNews(data.data);
  // };

  return (
    <div className="w-2/3">
      <div className="flex h-full">
        <div className="flex w-full m-5 shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue hover:cursor-pointer">
          News go Here
          {/* <div>

            {news?.map((item) => (
              <div key={item.uuid} className="flex h-1/3">
                <a
                  href={item.url}
                  className="flex flex-col items-center justify-center text-sm font-extrabold underline"
                >
                  {item.title}
                </a>
                <a href={item.url} className="pb-3 text-sm underline">
                  read more ...
                </a>
              </div>
            ))}
            
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default News;
