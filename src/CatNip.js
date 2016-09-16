import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CatPanel from './CatPanel';
import Buttons from './Buttons';

const cats = [
  {name:"Freddy", age:"8", image:"http://thecatapi.com/api/images/get?results_per_page=1&random="+Math.random()},
  {name:"Bobby", age:"5", image:"http://thecatapi.com/api/images/get?results_per_page=1&random="+Math.random()},
  {name:"Mike", age:"2", image:"http://thecatapi.com/api/images/get?results_per_page=1&random="+Math.random()},
  {name:"Jasmine", age:"2", image:"http://thecatapi.com/api/images/get?results_per_page=1&random="+Math.random()},
  {name:"Cassandra", age:"4", image:"http://thecatapi.com/api/images/get?results_per_page=1&random="+Math.random()},
  {name:"Vicky", age:"5", image:"http://thecatapi.com/api/images/get?results_per_page=1&random="+Math.random()},
  {name:"Rory", age:"8", image:"http://thecatapi.com/api/images/get?results_per_page=1&random="+Math.random()},
  {name:"Mike", age:"9", image:"http://thecatapi.com/api/images/get?results_per_page=1&random="+Math.random()}
]

class CatNip extends Component {
  constructor(props){
    super(props)
    this.state = { currentCat: 0, match: false, matchName: null }
  }
  likeCat(){
    this.setState({
      match : true,
      matchName : cats[this.state.currentCat].name,
      currentCat: (this.state.currentCat + 1 + cats.length) % cats.length
    })
  }
  dislikeCat(){
    this.setState({
      match:false,
      currentCat: (this.state.currentCat + 1 + cats.length) % cats.length
    })
  }
  previousCat(){
    this.setState({
      currentCat: (this.state.currentCat - 1 + cats.length) % cats.length
    })
  }
  render() {
    return (
      <div className="app">
        <h1>CatNip</h1>
        {this.displayMatch()}
        <CatPanel currentCat={this.state.currentCat} catArray={cats} />
        <Buttons name="previous" onClick={this.previousCat.bind(this)} image="http://simpleicon.com/wp-content/uploads/undo-5.png"/>
        <Buttons name="no" onClick={this.dislikeCat.bind(this)} image="data:image/jpeg;base64,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"/>
        <Buttons name="yes" onClick={this.likeCat.bind(this)} image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/2000px-Heart_coraz%C3%B3n.svg.png"/>
      </div>
    );
  }
  displayMatch() {
    if(this.state.match){
      return (
        <h1 className="match">It's a match with {this.state.matchName}</h1>
      )
    }else{
      return null
    }
  }
}

export default CatNip;
