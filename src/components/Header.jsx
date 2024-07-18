import React from "react";

const Header = () => {
  return (
    <div class="container-xxl bg-white shadow-lg px-md-5">
      <header class="d-flex flex-wrap justify-content-center align-items-center justify-content">
        <a href=""></a>
      </header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand text-primary" href="/">
            <b>Expense Tracker</b>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto justify-content-space-between navifill">
              <li class="nav-item">
                <a
                  class="nav-link active text-light"
                  aria-current="page"
                  href="/login"
                >
                  {" "}
                  <button class="btn btn-success ">Login</button>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/register">
                  <button class="btn btn-danger">Register</button>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
