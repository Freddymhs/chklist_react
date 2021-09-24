import React from 'react';
 import context from '../12-ContextAPI/context.png';
 import provider from '../12-ContextAPI/provider.png';

function Index() {
  return ( 
    <fragment>
    <p>how use ContextAPI</p>
    <p>es un patron</p>
    <p>esta es una forma de pasar datos a componentes sin importar su nivel en la jerarquia/estructura</p>

    <ul>
    <li>el context puede tener valores predeterminados</li>
    <li>el provider se genera para que los componentes obtengan la informacion</li>

    </ul>

    <p>se crea un contexto y este se provee a todos los hijos de este componente</p>
    <p>para llamar datos usamos <b>useContext(Whatcontext) </b></p>

    <p>
    Si solo deseas evitar pasar algunos props a través de muchos niveles, la composición de componentes suele ser una solución más simple que Context.
    </p>
   <hr/>
     <ol>
     <li>
        <p>un objecto context que al renderizarse y permite suscribe a sus hijos</p>
        <img src={context} width="80%"/>
     </li>
     <li>
     <p>react hace que los componentes que consumen el provder se suscriban a cambios del contexto</p>
        <img src={provider} width="80%"/>
     </li>
     </ol>
 
    
    </fragment>
   

   );
}
 
export default Index;

