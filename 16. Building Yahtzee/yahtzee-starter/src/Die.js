import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps={numberWords:['one', 'two', 'three', 'four', 'five', 'six']}; 
  render() {
    let classess=`Die fas fa-dice-${this.props.numberWords[this.props.val-1]} fa-5x `;
    if (this.props.locked) classess +='Die-locked'
    return (
      <i className={classess} onClick={()=> this.props.handleClick(this.props.idx)} disabled={this.props.disabled}/>
    );
  }
}

export default Die;
 