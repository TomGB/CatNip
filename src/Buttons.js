import React, {Component} from 'react'

class Buttons extends Component {
  render() {
    return (
      <button className="cat-button" onClick={this.props.onClick}>
        {this.renderImage()}
      </button>
    );
  }
  renderImage(){
    if(!this.props.image){
      return null
    }
    return(
      <img src={this.props.image}/>
    )
  }
}

export default Buttons;
