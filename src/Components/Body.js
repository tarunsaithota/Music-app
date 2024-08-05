import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import Head from "./Head";

const Body = () => {
  const sideBarOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <>
    <Head />
    <div className="pl-6 md:pl-0 flex w-full">
      {!sideBarOpen && <SideBar />}
        <MainContainer />
    </div>
    </>
  );
};

export default Body;