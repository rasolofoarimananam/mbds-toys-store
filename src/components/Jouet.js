import React, { Component } from 'react';
import base from '../base';
class Jouet extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      jouets : {}
    };
  }
  componentWillMount() {
    console.log("Component will mount");
    this.ref = base.syncState("jouets", {
      context: this,
      state: 'jouets'
    });
  }
  removeToy(k){
    var temp = {...this.state.jouets};
    temp[k]=null;
    this.setState({
      jouets :temp
    })
  }
  render() {
    var currentGameObject = this.props.jouets;
    console.log("length "+Object.keys(this.props.jouets).length);
    let list = Object.keys(this.props.jouets).map((key, index) => {
        const currentGame = currentGameObject[key];
        return (
        <li key={key}>
         <h3>{currentGame.nom}</h3>
         <p>
          Description : {currentGame.description}<br/>
          Prix : {currentGame.prix}
         </p>
         <button onClick={()=>this.removeToy(key)}><i className="fa fa-trash" aria-hidden="true"></i></button>
        </li>)
    });
    return list;
  }
}

export default Jouet;