import React from "react";
import usecallback from '../19-AdvancedHOOKS/concallback.png';
import nousecallback from '../19-AdvancedHOOKS/sincallback.png';


function Index() {
  return (
    <fragment>
      <p>some advanced HOOKS </p>
      <p>¿Qué es un Hook? Un Hook es una función especial que permite “conectarse” a características de React.</p>
        <p><b>useReducer, useCallback, useMemo, useRef</b></p>

      <ol>
        <li>
          useReducer
          <ul>
            <li>Te permiten usar estado y otras características de React sin escribir una clase</li>
            <li>extraer la logica del componente</li>
            <li>reusar la logica</li>
            <li>unit testint</li>
            <li>escalabilidad</li>
            <li>requisitos : funcion pura reducer , importar useReducer , usarlo!</li>
            <li>useReducer vs useStae ? escalabilidad , sistemas complejos , </li>
          </ul>
        </li>

 <li>
          useRef
          <ul>
             <li>referencia a un elemento HTML</li>
            <li>no se actualizara entre renders, ni lo provoca su modificacion</li>
            <li>useRef no provocara un render al actualizarse y por esto es util en ciertos casos</li>
            <li> util al usar componentes no controlados </li>
            <li> podria usarse para verificar que un componente este montado declarando useRef a un LET y a travez de su prop .current ejecutar o no algo dependiendo si esta montado aun , esto ayuda en sincrono</li>
            <li> leak memory</li>
          </ul>
        </li>

        <li>
          useCallback
          <ul>
            <li>peticiones de datos , suscripciones , eventos del dom son buenos ejemplos para el "EFECTO"</li>
            {/* <li>react.memo + useCallback()</li> */}
            <li>similar al useEfect en estructura</li>
            <li>permite memorizar y solo hara una actualizacion al momento de que una dependencia cambie</li>
            <li></li>
            <li>es una funcion que se le pasa un callback. y regresa una funcion memorizada , solo cambiante si algun argumento  se actualiza.</li>
          </ul>
        </li>

        <li>
          useMemo
          <a href="https://stackblitz.com/edit/react-rqdjpx"></a>
          <ul>  
            <li>es una funcion que se le pasa un callback. y regresa un valor memorizado , solo cambiante si algun argumento  se actualiza.</li>
            <li>evita que se declare una funcion que ya fue realizada como un fetch y no queremos que vuelva a cargarse</li>
              <img src={usecallback} width="80%"/>
              <li>ahora esta funcion solo se ejecutara en el primer render o podriamos hacerlo por alguna dependencia</li>
              <img src={nousecallback} width="80%"/>


            <li>la memorizacion ayuda a evitar calculos costosos en cada render que haga el componente , controlandolo</li>
            <li>los "effectos" secundarios deben usarse por useEffect y no desde useMemo , no mezclar los hooks</li>
          </ul>
        </li>

          
      </ol>

{/*
funcion pura:
depende solo de los argumentos pasados a la funcion
no muta los argumentos
no tiene efectos secundarios
 */}



        <li> usecontext : permite acceder a algun context api </li>
    
    </fragment>
  );
}

export default Index;

// useEfect se renderiza cada vez que actualizo algo en el componente (lifecycle) o cambio de algun estado con (setState) dentro del componente
// useEfect [].    = render solo la primera vez
// useEfect return = render cuando temrina de cambiar el estado

// useState , useReducer , useContext

// https://stackblitz.com/edit/react-rqdjpx

