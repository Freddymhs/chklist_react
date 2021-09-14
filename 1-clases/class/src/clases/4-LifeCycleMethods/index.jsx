import React from "react";
import didMount from '../4-LifeCycleMethods/didMount.png';
import didUpdate from '../4-LifeCycleMethods/didUpdate.png';
import willUnmount from '../4-LifeCycleMethods/willUnmount.png';


function Index() {
  return (
    <fragment>
      <p>life Cycle son <b>Estados del componente</b></p>
      <p>principalmente son 3 estado </p>
      <ol>
        <li><b>Mounting</b> 
        <ul>
        <li><img src={didMount} width="100%"/></li>
        </ul>
        </li>

        <li><b>Updating</b> 
       
         <ul>
        <li> <img src={didUpdate} width="100%"/></li>
        </ul>
        </li>

        <li> <b>Unmounting</b>
         <ul>
        <li> <img src={willUnmount} width="100%"/></li>
        </ul>
        
        </li>
      </ol>
<br/>
      <p>
      tradicionalmente con clases se es mas Imperativo ya que agregamos el <b>RENDER</b> y el concepto de clase es diferente , este tiene constructor
      recibe props y siempre necesita el metodo render() cosa que aqui es reemplazado todo por el <b>useEffect y setSate</b>
      </p>

    </fragment>
  );
}

export default Index;

