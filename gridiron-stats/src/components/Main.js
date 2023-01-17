import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
// import Resume from "./pages/Resume";
// import "./Main.css";
import "animate.css";

export default function Main() {
  const [currentPage, setCurrentPage] = useState("About");

//   const renderPage = () => {
//     if (currentPage === "About") {
//       return <About />;
//     }
//     if (currentPage === "Portfolio") {
//       return <Portfolio />;
//     }
//     if (currentPage === "Contact") {
//       return <Contact />;
//     }
//     return <Resume />;
//   };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      
      <Footer />
    </div>
  );
}
