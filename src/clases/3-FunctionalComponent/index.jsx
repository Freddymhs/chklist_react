import React from 'react';
 import clase from '../3-FunctionalComponent/classComponent.png';
 import funcion from  '../3-FunctionalComponent/functionalComponent.png';

function Index() { 
  console.log()
  return ( 
   <fragment>
    <p>Functional Components</p>
    <p><b>funciones</b> que regresan <b>JSX</b> </p>
    <p>un component funcional es basicamente una <b>funcion</b></p>

    <img src={clase} width="100%"/>
    <img src={funcion} width="100%"/>

    <b>ventajas</b>
    <ul>
      <li><p>en render esta implicito en el return ahorrando codigo!</p></li>
      <li><p>la clase solo puede tener 1 estado , las funciones pueden tener ilimitadas.</p></li>
    </ul>
    <b>cambios less code</b>
    <ul>
      <li><p>ya nos olvidamos de llamar a this</p></li>
      <li><p>ya nos olvidamos de llamar a lifecycle</p></li>
      <li><p>ya nos olvidamos de llamar a return</p></li>
      
    
    
    </ul>
    </fragment>
   );
}

export default Index;
