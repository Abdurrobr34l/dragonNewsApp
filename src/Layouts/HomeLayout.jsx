import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      {/*//* Header */}
      <header>
        <Header></Header>
        <section className="mx-auto w-11/12">
          <LatestNews></LatestNews>
        </section>

        <nav className="mx-auto w-11/12">
          <Navbar></Navbar>
        </nav>
      </header>

      {/*//* Main */}
      <main>
        {/*//? Left Nav*/}
        <section></section>

        {/*//? Main*/}
        <section>
          <Outlet></Outlet>
        </section>

        {/*//? Right Nav*/}
        <section></section>
      </main>
    </div>
  );
};

export default HomeLayout;
