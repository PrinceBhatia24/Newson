import React, { useState } from "react";
import { Link } from "react-router-dom";
import News from "./News";


function Navbar({ setCoun }) {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              <img src={process.env.PUBLIC_URL + '/images/p.jpg'} alt="Newson" width="100" height="20" style={{ marginLeft: 20 }}></img>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/sports"
                  >
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/health"
                  >
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/science"
                  >
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/business"
                  >
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <select className="form-select c1" aria-label="Default select example" onChange={(e) => { setCoun(e.target.value) }}>

                    <option value='in'>India</option>
                    <option value='us'>United State</option>
                    <option value='ae'>United arab emirates</option>
                    <option value='nl'>Netherland</option>
                    <option value='br'>Brazil</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>


    </>
  );
}
export default Navbar;
