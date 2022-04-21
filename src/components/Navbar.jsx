import React from "react";
//import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-lg-0 border-bottom ">
      <div className="container">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          width="30"
          height="30"
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
