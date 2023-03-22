import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand text-white " href="#">
            GAFAS DE SOL
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <nav class="container-fluid">
            <div
              class="collapse navbar-collapse  justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div class="navbar-nav">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  IDENTIFICATE!
                </a>
                <a class="nav-link text-white " href="#">
                  CONTACTO
                </a>
                <a class="nav-link text-white " href="#">
                  DEVOLUCIONES
                </a>
                <a class="nav-link disabled text-white">COMPRAR</a>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
