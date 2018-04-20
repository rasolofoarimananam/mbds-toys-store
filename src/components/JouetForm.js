import React, { Component } from 'react';
import base from '../base';
import FileUploader from 'react-firebase-file-uploader';
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
    if(newToy.nom.length===0 || newToy.description.length===0 || newToy.prix.length===0){
      console.log("vide");
    }
    else{
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
      this.refs.inputNom.value = "";
      this.refs.inputPrix.value = "";
      this.refs.inputDescription.value = "";
    }
    
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Nom" ref="inputNom" required=""/>
          <input type="text" placeholder="Description" ref="inputDescription" required=""/>
          <input type="number" placeholder="Prix" ref="inputPrix" required="" pattern="[0-9]+(\\.[0-9][0-9]?)?"/>
          
          <button onClick={()=>this.addToy()}>Ajouter</button>
        </form>
      </div>);
  }
}

export default JouetForm;