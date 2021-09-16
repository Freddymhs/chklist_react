import React from 'react';
 

function Index() {
  return ( 
    <p>some basic HOOKS <b>useState, useEffect, useContext</b> </p>
   );
}
 
export default Index;

// useEfect se renderiza cada vez que actualizo algo en el componente (lifecycle) o cambio de algun estado con (setState) dentro del componente
// useEfect [].    = render solo la primera vez 
// useEfect return = render cuando temrina de cambiar el estado 




 
