import React, { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router";
import { useOutletContext, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  // const newsData = useLoaderData(); //* All 58 news data
  const { newsData } = useOutletContext();
  const [newsByCategory, setNewsByCategory] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setNewsByCategory(newsData); //* show all 58 news data
      return;
    } else if (id == "1") {
      //* This one to find Breaking news data only
      const filterBreakingNews = newsData.filter(
        (breakingNews) => breakingNews.others.is_today_pick == true
      );
      setNewsByCategory(filterBreakingNews);
    } else {
      //* Show news by id
      const filterNewsById = newsData.filter(
        (newsById) => newsById.category_id == id
      );

      setNewsByCategory(filterNewsById);
    }
  }, [id, newsData]);

  return (
    <div>
      <h2 className="mb-5 font-semibold">Dragon News Home</h2>

      <div className="col-span-1">
        <NewsCard newsByCategory={newsByCategory}></NewsCard>
      </div>
    </div>
  );
};

export default CategoryNews;
