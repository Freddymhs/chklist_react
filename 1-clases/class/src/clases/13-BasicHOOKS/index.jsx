import React from "react";

function Index() {
  return (
    <fragment>
      <p>some basic HOOKS </p>
      <p>¿Qué es un Hook? Un Hook es una función especial que permite “conectarse” a características de React.</p>
      <p> useState, useEffect, useContext </p>

      <ol>
        <li>
          useState
          <ul>
            <li>Te permiten usar estado y otras características de React sin escribir una clase</li>
            <li><b>this.state / this.setState</b> ahora es [state , setState]</li>
            <li>los hooks no funcionan en las clases</li>
            <li>ahora debemos crear variables de estado</li>
            <li>useState es un array que debemos desesctructurar en variables[valor,funcionActualizar]</li>
            <li>actualizar una varaible de estado con hooks la sobreescribe y no la agrega</li>
            <li>todos los estados locales afectan al componente en el ciclo de vida de este componente local</li>
          </ul>
        </li>

        <li>
          useEffect
          <ul>
            <li>peticiones de datos , suscripciones , eventos del dom son buenos ejemplos para el "EFECTO"</li>
            <li>useEffect = [componentDidMount,componentDidUpdate,componentWillUnmount]</li>
            <li>se monto, se actualizo ,se va a desmontar</li>
            <li>sin sanemiento = algo que se ejcutara y nos podemos olvidar como una peticion </li>
            <li>como lo le REACT? : debes realizar un efecto al renderizarte,actualizara algun estado , o desmontarte</li>
            <li>useEffect aprovenchan las CLOSURES ya que estan dentro del ambito de la funcion/componente</li>
            <li>para efectos sincronicos usar <b>useLayoutEffect</b></li>
            <li>con sanemiento = debemos usar useEfect + useEfect con el return para susbrirse() y desuscribirse()</li>
            <li>useEfect desmontara y luego tratara de montar basado en sus arreglo de dependecias</li>
            <li>si el componente esta desmontado e intentamos aplicar algun efecto tendremos un fallo</li>

          </ul>
        </li>

        <li>
          useContext
          <ul>
            <li></li>
            <li>a</li>
            <li>a</li>
          </ul>
        </li>
      </ol>




        <li> usecontext : permite acceder a algun context api </li>
    
    </fragment>
  );
}

export default Index;

// useEfect se renderiza cada vez que actualizo algo en el componente (lifecycle) o cambio de algun estado con (setState) dentro del componente
// useEfect [].    = render solo la primera vez
// useEfect return = render cuando temrina de cambiar el estado


