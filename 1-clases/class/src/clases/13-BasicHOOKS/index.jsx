import React from 'react';
 

function Index() {
  return ( 
    <fragment>
      <p>some basic HOOKS <b>useState, useEffect, useContext</b> </p>
      <p> useState, useEffect, useContext </p>      
<ol>
      <li>useState : permite modificar el objecto state u obtener su valor</li>
      <li>useEffect : nos permite reaccionar al ciclo de vida de algun componente</li>
      <li> usecontext : permite acceder a algun context api </li>
    </ol>
    </fragment>
   );
}
 
export default Index;

// useEfect se renderiza cada vez que actualizo algo en el componente (lifecycle) o cambio de algun estado con (setState) dentro del componente
// useEfect [].    = render solo la primera vez 
// useEfect return = render cuando temrina de cambiar el estado 




 
