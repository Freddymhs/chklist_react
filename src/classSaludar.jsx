import React from 'react';
import ReactDOM from 'react-dom'


export default class Saludar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: "Guiadev"};
  }

  render() {
    return (
      <div>
        <h1>Hola, {this.state.name}!</h1>
      </div>
    );
  }
}



// ReactDOM.render(
//   <Saludar />,
//   document.getElementById('root')
// );