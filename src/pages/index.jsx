// Import React para poder usar jsx
import * as React from "react";
import { Link } from "gatsby";

/* Definir un componente, es decir, una funcion que un elemento react (un objeto que react usa para renderizar elementos de DOM)*/
const IndexPage = () => {
  return (
    <main>
      <title>Inicio</title>
      <h1>Bienvenido al sitio de prueba.</h1>
      <Link to="/about">About</Link>
      <p>Siguiendo el tutorial de Gatsby.</p>
    </main>
  );
};

// Por último exportamos los componentes para que puedan ser usados

export default IndexPage;
