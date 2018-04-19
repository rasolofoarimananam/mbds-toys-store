import React, { Component } from 'react';
class JouetForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Nom"/>
        <input type="text" placeholder="Description"/>
        <input type="text" placeholder="Prix"/>
        <button>Ajouter</button><br/>
      </div>);
  }
}

export default JouetForm;