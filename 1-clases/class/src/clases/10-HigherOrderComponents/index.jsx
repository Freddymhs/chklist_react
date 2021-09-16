import React from 'react';
 

function Index() {
  return ( 
    <p>High order components</p>
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









