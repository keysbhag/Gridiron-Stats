import React from "react";
import "./Navbar.css"

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg custom-bg fs-5">
      <div className="justify-content-center">
        <div className="d-flex justify-content-center">
          <h1 className="m-3 header">Gridiron Stats</h1>
          <button
            className="navbar-toggler mx-3"
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
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav m-1">
            <li className="nav-item mt-1 mx-1">
              <div
                onClick={() => handlePageChange("Passing")}
                className={
                  currentPage === "Passing"
                    ? "custom-navlink btn-custom"
                    : "custom-navlink btn-outline-custom"
                }
              >
                Passing Stats
              </div>
            </li>
            <li className="nav-item mt-1 mx-1">
              <div
                onClick={() => handlePageChange("Rushing")}
                className={
                  currentPage === "Rushing"
                    ? "custom-navlink btn-custom"
                    : "custom-navlink btn-outline-custom"
                }
              >
                Rushing Stats
              </div>
            </li>
            <li className="nav-item mt-1 mx-1">
              <div
                onClick={() => handlePageChange("Receiving")}
                className={
                  currentPage === "Receiving"
                    ? "custom-navlink btn-custom"
                    : "custom-navlink btn-outline-custom"
                }
              >
                Receiving Stats
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
