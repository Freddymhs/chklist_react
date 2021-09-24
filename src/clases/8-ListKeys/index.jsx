import React from 'react';
 import mal from './mal.png';
 import correcto from './bienregular.png';
 import echelente from './bienpro.png';

function Index() {
  return ( 
    <>
    <p>why use list and <b>keys</b></p>
    <p>las keys debens ser una indetidad estable , asi permitir a react identificarlos en caso de cambios</p>
    <p>nunca usar el INDEX de una lista <b>si esta lista PUEDE CAMBIAR</b> ya que no servira de nada</p>
    <p>cuando y porque mostrarlas ? aca dejo un ejemplo practico del dia a dia</p>
    <p>Las keys deben ser únicas solo entre hermanos, de forma global <b>no importan</b></p>

      <img src={mal} width="100%"/>
      <img src={correcto} width="100%"/>
      <img src={echelente} width="100%"/>

    </>
   );
}
 
// renderizar elementos debe hacer con keys(string) 
// optimiza el rendimiento al actualizar solo los que necesita
// permite mantener el estado del componente
// NO usar index para key , 


export default Index;