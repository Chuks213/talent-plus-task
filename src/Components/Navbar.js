import React from "react";

// import logo from "../public/images/logo.png";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#"> <img src="/images/logo.png" className="logo" alt="" /> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Testimonial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Community</a>
            </li>
          </ul>

        </div>
        <button type="button" className="btn btn-light">Enroll Now</button>
      </div>
    </nav>
  )
}

export default Navbar;
