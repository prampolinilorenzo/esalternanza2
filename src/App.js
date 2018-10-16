import React, { Component } from 'react';


class App extends Component {
	
  state = {  
	  contatore: 0
  }
  render() {
	  
    return (
	  <div  id="box">
		  <h1> Contatore = {this.state.contatore}</h1>
			  <button onClick={() => this.setState({contatore: this.state.contatore + 1})}>
			  incrementa
			  </button>
			  <button onClick={() => this.setState({contatore: this.state.contatore - 1})}>
			  decrementa	
			  </button>
	  </div>
    );
  }
}

export default App; 