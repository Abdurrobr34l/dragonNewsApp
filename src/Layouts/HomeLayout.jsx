import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";

const HomeLayout = () => {
  return (
    <div>
      {/*//* Header */}
      <Header></Header>

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
