import React from "react";
import Header from "../Components/Header";
import RightAside from "../Components/Homelayout/rightAside";
import NewsDetailsCard from "../Components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const newsData = useLoaderData(); // Load the news JSON again
  const { id } = useParams();

 const newsItem = newsData?.find(item => item.id === id);

  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <main className="grid grid-cols-12 gap-8 mx-auto w-11/12">
        <section className="col-span-9">
          <NewsDetailsCard newsItem={newsItem}></NewsDetailsCard>
        </section>

        <aside className="scrollbar-custom overflow-auto sticky !top-10 col-span-3 max-h-screen">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
