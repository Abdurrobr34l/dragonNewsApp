import React from "react";
import { Outlet, useLoaderData } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/Homelayout/LeftAside";
import RightAside from "../Components/Homelayout/rightAside";

const HomeLayout = () => {
    const newsData = useLoaderData(); //* All 58 news data
  return (
    <div>
      {/*//* Header */}
      <header>
        <Header></Header>
        <section className="mx-auto w-11/12">
          <LatestNews newsData={newsData}></LatestNews>
        </section>

        <nav className="mx-auto w-11/12">
          <Navbar></Navbar>
        </nav>
      </header>

      {/*//* Main */}
      <main className="grid grid-cols-12 gap-8 mx-auto my-3 w-11/12">
        {/*//? Left Nav*/}
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>

        {/*//? Main*/}
        <main  className="col-span-6">
          <Outlet context={{newsData}}></Outlet>
        </main>

        {/*//? Right Nav*/}
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
