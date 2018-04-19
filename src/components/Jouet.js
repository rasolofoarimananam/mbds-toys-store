import React, { Component } from 'react';
class Jouet extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      jouets : this.props.jouets
    };
  }

  render() {
    var currentGameObject = this.props.jouets;
    console.log("length "+Object.keys(this.props.jouets).length);
    let list = Object.keys(this.props.jouets).map((key, index) => {
        const currentGame = currentGameObject[key];
        return (<li key={index}>
         Nom : {currentGame.nom} <br/>
         Description : {currentGame.description}<br/>
         Prix : {currentGame.prix}
         <button>supprimer</button>
        </li>)
    });
    return list;
  }
}

export default Jouet;