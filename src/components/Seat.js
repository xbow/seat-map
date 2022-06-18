import React, { Component } from 'react'

export default class Seat extends Component {
  /* 
     Using a dictionary to map colors to categories could make it easier
     to customize it later, e.g. by importing the dictionary from a config file 
     
     Since the seat map is a SVG, it cannot be styled via css classes
  */
  categoryColorMap = {
    1: "aquamarine",
    2: "lightpink",
    3: "mediumpurple"
  }
  
  onClickSeat(id) {
    /* this could select the seat for booking a ticket*/ 
    console.info(`you clicked on seat ${id} `)
  }

  get fillColor() {
    const { category } = this.props
    return this.categoryColorMap[category]
  }

  render() {
    const { posX, posY, id } = this.props
    return <circle cx={posX} cy={posY} r="8" fill={this.fillColor} onClick={() => this.onClickSeat(id)}/>
  }
}