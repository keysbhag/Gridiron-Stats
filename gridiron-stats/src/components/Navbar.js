import React from "react";
import "./Navbar.css"

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg custom-bg fs-5">
      <div className="container-fluid justify-content-center">
        <div className="d-flex">
          <h1 className="mx-4">Gridiron Stats</h1>
          <button
            className="navbar-toggler mx-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav m-3">
            <li className="nav-item mt-1 mx-1">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About"
                    ? "custom-navlink btn-custom"
                    : "custom-navlink btn-outline-custom"
                }
              >
                About
              </a>
            </li>
            <li className="nav-item mt-1 mx-1">
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={
                  currentPage === "Portfolio"
                    ? "custom-navlink btn-custom"
                    : "custom-navlink btn-outline-custom"
                }
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item mt-1 mx-1">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact"
                    ? "custom-navlink btn-custom"
                    : "custom-navlink btn-outline-custom"
                }
              >
                Contact
              </a>
            </li>
            <li className="nav-item mt-1 mx-1">
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume"
                    ? "custom-navlink btn-custom"
                    : "custom-navlink btn-outline-custom text reset"
                }
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
