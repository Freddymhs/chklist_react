import React from "react";
import ReactDOM from "react-dom";

class Index extends React.Component {
  render() {
    return (
      <fragment>
        <h2>que es virtual dom</h2>
        <p>JSX no es un requisito para usar React</p>
        <a href="https://es.reactjs.org/docs/faq-internals.html">
          {" "}
          virtual dom y shadow
        </a>
        <p>
          es <b>UI en memoria</b> y que sincroniza con el <b>DOM/UI</b> que
          tiene el arbol de html{" "}
        </p>
        <p>
          el shadow es tecnologia de navegadores con un scope de css y variables
          no visibles para el dev
          el shadow dom es uno dentro del DOM , permite un css y vars que estan dentro de componentes especiales como el de <b>Video</b>
        </p>


      </fragment>
    );
  }
}

// ReactDOM.render(
//   React.createElement(Index, { toWhat: "World" }, null),
//   document.getElementById("root")
// );

export default Index;
