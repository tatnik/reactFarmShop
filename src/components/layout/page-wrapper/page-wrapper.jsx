import React from "react";
import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";
import "./page-wrapper.css"
import Footer from "../footer/footer";
import BuyPage from './../../pages/buy-page/buy-page';



function PageWrapper({ advantages, products }) {
  //<MainPage advantages={advantages} />
  return (
    <>
      <Header />
      <main className="page-wrapper__main" >
        <BuyPage products={products} />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;