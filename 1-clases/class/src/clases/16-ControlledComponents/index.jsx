import React from 'react';
 import controlado from '../16-ControlledComponents/controlado.png';
 import nocontrolado from '../16-ControlledComponents/nocontrolado.png';
function Index() {
  return ( 
<>
    <p>controlled components ? </p>
     <p>basicamente un componente controlado es cuando react es responsable de mantener el STATE de este y su VALUE sincronizado</p>
    <p>ejemplo de uno seria, el formulario donde react procesa sus elementos y los controla haciendose cargo e su estado y eventos </p>
    <ul>
    
<li>
<p>uno no controlado es el que almacena su pripio estado y podemos usar el DOM para consultar su "value" es parecido al html tradicional ya que maneja su propio valor</p>
<img src={nocontrolado} width="100%"/>
</li>
<li>
    <p>un componente controlador es aquel que toma su valor por "props" y notifica cambios por "onChange" y <b> un componente PRINCIPAL lo CONTROLA</b> manejando su estado , llamadas y accesorios</p>
    <img src={controlado} width="100%"/>
</li>

    
<input type="text" defaultValue="foo" ref={inputRef} />


    </ul>
 
   

</>



   );
}
 
export default Index;


