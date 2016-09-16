import React, {Component} from 'react'

class CatPanel extends Component {

  render() {
    var catImageStyle= {
      backgroundImage:'url( "'+this.props.catArray[this.props.currentCat].image+'" )',
      backgroundSize:'cover',
      backgroundPosition: '50 50'
    }
    return (
      <div className="cat-panel">
        <div className="cat-image" style={catImageStyle}>
        </div>
        <h2>{this.props.catArray[this.props.currentCat].name}, {this.props.catArray[this.props.currentCat].age}</h2>
      </div>
    );
  }
}

export default CatPanel;
