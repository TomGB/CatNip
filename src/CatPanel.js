import React, {Component} from 'react'



class CatPanel extends Component {
  render() {
    return (
      <div className="cat-panel">
        <img className="cat-img" src={this.getCatImage()}/>
        <h2>{this.props.catArray[this.props.currentCat].name}, {this.props.catArray[this.props.currentCat].age}</h2>
      </div>
    );
  }
  getCatImage(){
    return "http://thecatapi.com/api/images/get?results_per_page=1&random="+Math.random()
  }
}

export default CatPanel;
