import React from "react";
const Jumbotron = () => {
  return (
    <>
      <div className="jumbotron m-5">
        <h1 className="display-4 ">Bienvenido!</h1>
        <p className="lead ">
          Conoce toda la variedad de nuestros modelos de Gafas de Sol.
        </p>
        <a
          type="button"
          href="https://www.ray-ban.com/"
          class="btn btn-outline-secondary bg-dark text-white"
        >
          Leer Más
        </a>
      </div>
    </>
  );
};
export default Jumbotron;
