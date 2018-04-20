import React, { Component } from 'react';
import base from '../base';
class JouetForm extends React.Component {
  constructor() {
    super();

  }
  addToy(){
    const newToy ={
      nom : this.refs.inputNom.value,
      prix :this.refs.inputPrix.value ,
      description : this.refs.inputDescription.value
    }
    var immediatelyAvailableReference = base.push('jouets', {
      data: newToy,
      then(err){
        if(!err){
          //Router.transitionTo('dashboard');
        }
      }
    });
    //available immediately, you don't have to wait for the callback to be called
    var generatedKey = immediatelyAvailableReference.key;
  }
  render() {
    return (
      <form>
        <input type="text" placeholder="Nom" ref="inputNom" required=""/>
        <input type="text" placeholder="Description" ref="inputDescription" required=""/>
        <input type="number" placeholder="Prix" ref="inputPrix" required="" pattern="[0-9]+(\\.[0-9][0-9]?)?"/>
        <button onClick={()=>this.addToy()}>Ajouter</button>
      </form>);
  }
}

export default JouetForm;