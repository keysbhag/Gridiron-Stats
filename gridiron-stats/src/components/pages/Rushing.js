import React from "react";

export default function Rushing() {
  return (
    <div className="">
      <h1 className="text-center p-3">Rushing</h1>
      <div className="m-4">
        <div className="dropdown ms-5">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Seasons
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#yolo">
                2022 Post Season
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#yolo">
                2022 Regular Season
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#yolo">
                2021 Post Season
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#yolo">
                2021 Regular Season
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#yolo">
                2020 Post Season
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#yolo">
                2020 Regular Season
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#yolo">
                2019 Post Season
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#yolo">
                2019 Regular Season
              </a>
            </li>
          </ul>
        </div>
        <div className="stat-container d-flex justify-content-center">
          <div>This is where stats will go</div>
        </div>
      </div>
    </div>
  );
}
