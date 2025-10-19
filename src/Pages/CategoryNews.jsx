import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const newsData = useLoaderData(); //* All 58 news data
  const [newsByCategory, setNewsByCategory] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setNewsByCategory(newsData); //* show all 58 news data
      return;
    } else if (id == "1") {  //* This one to find Breaking news data only
      const filterBreakingNews = newsData.filter(
        (breakingNews) => breakingNews.others.is_today_pick == true
      );
      setNewsByCategory(filterBreakingNews);
    } else { //* Show news by id
      const filterNewsById = newsData.filter(
        (newsById) => newsById.category_id == id
      );

      setNewsByCategory(filterNewsById);
    }
  }, [id, newsData]);

  return <div>CategoryNews - {newsByCategory.length}</div>;
};

export default CategoryNews;
