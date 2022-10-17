import React from "react";
// import { Layout } from "antd";
import {
  ContentLayoutMainDiv,
  MainLayoutDiv,
  SidebarLayoutDiv,
} from "./Dashboard.style";
import Content from "./content/Content";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./header/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "../../About";

const Dashboard = () => {
  return (
    <>
      {/*  main Div of Dashboard */}
      <MainLayoutDiv>
        {/* Its a header on the top */}
        <Navbar />
        {/* another layout div that covers sidebar and also content */}
        <SidebarLayoutDiv>
          <Sidebar />
          {/* It's the content layout, It's only cover content */}
          <ContentLayoutMainDiv>
            <Routes>
              <Route
                path="/"
                element={
                  <h2>
                    Click On the
                    <b>
                      <mark> Home</mark>
                    </b>
                    or
                    <b>
                      <mark> About</mark>
                    </b>
                    to Display Data of that Component
                  </h2>
                }
              ></Route>
              <Route path="/home" element={<Content />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </ContentLayoutMainDiv>
        </SidebarLayoutDiv>
        {/* Here we will paste the footer layout */}
      </MainLayoutDiv>
    </>
  );
};

export default Dashboard;
