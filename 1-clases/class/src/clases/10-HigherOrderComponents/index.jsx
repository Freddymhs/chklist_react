import React from 'react';
import HOC from '../10-HigherOrderComponents/ejemplo.png';
import resultado from '../10-HigherOrderComponents/resultado.png';
import superhoc from '../10-HigherOrderComponents/superhoc.png';
function Index() {
  return ( 
    <>
    <p>High order components</p>
    <p>una funcion que regresa un nuevo componente</p>
    <p>el componente regresa incluira nuevas propiedas</p>
     <img src={HOC} width="80%"/>
     <img src={resultado} width="20%"/>
      <img src={superhoc} width="100%"/>
    <p>un High order component <b>agrega logica/funciones/extiende</b></p>
    </>
   );
}
 
export default Index;


 

// a component is a  const ejemplo  = () => {return ( <h1>hola</h1> );}
// a function that take a component and return a new component , // let hi = saludo(Component)
// transformar un componente agregando nuevas props
// HOC = es un patron posible dentro de REACT
function DoSomethin(ElComponente){ 
  return (config) => {
    console.log(config);
    return <ElComponente/>
    }
}

// el componente puede ENVOLVER. a otros componentes
DoSomethin()({ip:'192.168.1.1', name:'supersecretweb'})









