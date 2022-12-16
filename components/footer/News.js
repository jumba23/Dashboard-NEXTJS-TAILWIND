import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const res = await fetch(
      "https://api.marketaux.com/v1/news/all?symbols=TSLA,AMZN,MSFT&filter_entities=true&language=en&api_token=KD8Q3G9XskvR3i93hG6p9JbNa61mpopEeO7CAxd4"
    );
    const data = await res.json();
    setNews(data.data);
  };

  return (
    <div className="w-2/3 ">
      <div className="flex h-full">
        <div className="flex w-full m-5 shadow-xl shadow-sky-800 card bg-reallyLightBabyBlue hover:cursor-pointer">
          <ul>
            {news?.map((item) => (
              <li key={item.uuid}>
                <p className="font-extrabold">{item.title}</p>
                <p className="pb-3 underline">{item.url}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default News;
