import React from 'react';
 

function Index() {

// 2 elemento que adquiere un componente
const element = <Welcome name="Sara" />;

  return ( 
    <fragment>
    <p>what area PROPS</p>
    <p>las props son pasadas al componente</p>
    <p>propiedades son inmutables</p>
    <p>props / this.props</p>
    <p>pasar [componentes,primitivos ,objetos] de padre a hijo</p>
    

    <p>
    Cuando React ve un elemento representando un componente definido por el usuario, pasa atributos JSX e hijos a este componente como un solo objeto. Llamamos a este objeto “props”.
    </p>

    {/* 3 renderizado de un componente que trae sus default props */}
    {element}
    

    </fragment>
   );
}
 
export default Index;

// 1 componente funcional que se le pasan pripiedades 
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

