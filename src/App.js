import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Test.css';
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
        <header>
            <div className='wrapper'>
              <h1>My Toys Store</h1>
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
            <JouetForm></JouetForm>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
                <Jouet jouets={this.state.jouets} app={this}></Jouet>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
