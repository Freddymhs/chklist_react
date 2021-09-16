import "./App.css";
import React from "react";

import NoJsx from "./clases/1-jsx/index";
import VirtualDom from "./clases/2-virtualDom/index";
import FunctionalComponents from "./clases/3-FunctionalComponent/index";
import LifeCycleMethods from "./clases/4-LifeCycleMethods/index";
import StatesInReact from "./clases/5-State/index";
import PropsElements from "./clases/7-Props/index";
import ListANDKeys from "./clases/8-List&Keys/index";
import PresentationalOrContainer from "./clases/9-Presentational-OR-ContainerComponents/index";
import HOC from "./clases/10-HigherOrderComponents/index";
import Composition from "./clases/11-Compositions/index";
import ContextAPI from "./clases/12-ContextAPI/index";
import BasicHooks from "./clases/13-BasicHOOKS/index";
import EventHandling from "./clases/14-EventHandling/index";
import ConditionalRender from "./clases/15-ConditionalRendering/index";
import ControlledComponents from "./clases/16-ControlledComponents/index";
import liftingStateUp from "./clases/17-LiftingStateUp/index";
import Fragments from "./clases/18-Fragments/index";
import AdvancedHooks from "./clases/19-AdvancedHOOKS/index";

// https://app.pluralsight.com/paths/skills/building-web-applications-with-react
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Guiadev" };
  }

  render() {
    return (
      <div className="App">
        <h1>Ejemplos compuestos solo de COMPONENTES</h1>
        {/* <h1>Hola, {this.state.name}!</h1> */}
        <div id="container">
          <div id="one">
            <NoJsx toWhat="Mundo" />
          </div>
          <div id="two">
            <VirtualDom />
          </div>
          <div id="three">
            <FunctionalComponents/>
          </div>
          <div id="four">
            <LifeCycleMethods/>
          </div>
          <div id="five">
            <StatesInReact/>
          </div>
          <div id="six">que es x</div>
          <div id="seven">que es x</div>
          <div id="eight">que es x</div>
          <div id="nine">que es x</div>
          <div id="ten">que es x</div>
          <div id="eleven">que es x</div>
          <div id="twelve">que es x</div>
          <div id="thirteen">que es x</div>
          <div id="fourteen">que es x</div>
          <div id="fifteen">que es x</div>
          <div id="sixteen">que es x</div>
          <div id="seventeen">que es x</div>
          <div id="eighteen">que es x</div>
          <div id="nineteen">que es x</div>
        </div>
      </div>
    );
  }
}
export default App;
// main
  // one
  // two
  // three
  // four
  // five
  // six
  // seven
  // eight
  // nine
  // ten
  // eleven
  // twelve
  // thirteen
  // fourteen
  // fifteen
  // sixteen
  // seventeen
  // eighteen
  // nineteen

