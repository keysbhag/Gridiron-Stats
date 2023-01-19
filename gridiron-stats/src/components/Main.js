import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Passing from "./pages/Passing";
import Rushing from "./pages/Rushing";
import Receiving from "./pages/Receiving";
import "./Main.css";
import "animate.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Passing");


  const renderPage = () => {
    if (currentPage === "Passing") {
      return <Passing />;
    }
    if (currentPage === "Rushing") {
      return <Rushing />;
    }
    if (currentPage === "Receiving") {
      return <Receiving />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="custom-font">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="main">{renderPage()}</div>
      {/* <Footer /> */}
    </div>
  );
}
