import React from 'react';
 import reusandoComponentUI from '../9-Presentational-OR-ContainerComponents/reusandoComponentUI.png';

function Index() {
  return ( 
<fragment>
    <p>what is Presentational and Container Components </p>
    <b>deberiamos dividir todos los comps en PRESENTACIONALES y CONTENEDORES</b>
    <p>separando UI del COMPORTAMIENTO</p>

    <p>este es un componente para presentaciones</p>
    <p>un boton estilisado con algun framework</p>
    <p>un componente mio que se solo renderiza datos </p>

    <p>este es un contenedor decomponente y MANTIENE la LOGICA aqui solamente</p>
    <p>un formulario compuesto de otros mini componentes como buton+input</p>

    <p>ejemplo como un Container usa un Presentational</p>
    <img src={reusandoComponentUI} width="100%"/>
  

</fragment>
   );
}
 
export default Index;
