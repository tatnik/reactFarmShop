import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";
import { Main } from "./styles";



function PageWrapper({ advantages, products }) {
  //<MainPage advantages={advantages} />
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;