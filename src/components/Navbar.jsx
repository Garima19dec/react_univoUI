import React from "react";
//import { NavLink } from "react-router-dom";
import img from "../svg/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-lg-0 border-bottom ">
      <div className="container">
        <img
         src={img}
          alt=""
          width="auto"
          height="auto"
          className="d-inline-block align-text-top"
        />
        <a
          className="navbar-brand js-scroll-trigger blockquote fw-bold border-start mx-5"
          href="#"
        >
          <div className=" border-end px-5">
            <h6 className=" text-warning text-opacity-100 ">
              Get In Touch For
            </h6>
            <div className=" text-uppercase">Partnership</div>
          </div>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Our Story
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">
                Why UNIVO?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Partnership
              </a>
            </li> */}
          </ul>
          <span className="navbar-text me-3 text-black">Our Story</span>
          <span className="navbar-text me-3 text-black"> Why UNIVO?</span>
          <span className="navbar-text me-3 text-black">Partnership</span>
          <span className="navbar-text me-3 text-black">
            Partner Universities
          </span>
          <span className="navbar-text text-black">Performance</span>
          <div className="py-4 my-2">
           
            <a
              href="#"
              className=" btn bg-primary rounded-pill text-light mx-3"
            >
              Download Bronchure
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
