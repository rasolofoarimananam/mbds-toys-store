import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import base from './base';
import Jouet from './components/Jouet';
import JouetForm from './components/JouetForm';
class App extends Component {
  constructor() {
    super();
    this.state = {
      jouets : {}
    };
  }
  // Appele avant render
  componentWillMount() {
    console.log("Component will mount");
    this.ref = base.syncState("jouets", {
      context: this,
      state: 'jouets'
    });
  }

  // appele quand le composant disparait, par ex
  // quand on quitte l'application
  componentWillUnmount() {
    console.log("Component will unmount");
    base.removeBinding(this.ref);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Toys Store</h1>
        </header>
        <div >
          <JouetForm></JouetForm>
          <Jouet jouets={this.state.jouets}></Jouet>
        </div>
      </div>
    );
  }
}

export default App;
