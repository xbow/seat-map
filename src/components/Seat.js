import React, { Component } from 'react'
import colors from '../config/colors'

export default class Seat extends Component {
  /* 
     Using a dictionary to map colors to categories could make it easier
     to customize it later, e.g. by importing the dictionary from a config file 
     
     Since the seat map is a SVG, it cannot be styled via css classes
  */
  
  onClickSeat(id) {
    /* this could select the seat for booking a ticket*/ 
    console.info(`you clicked on seat ${id} `)
  }

  get fillColor() {
    const { category, status } = this.props
    if (status === 0) {
      return colors.unavailable;
    }
    return colors.categoryColors[category]
  }

  render() {
    const { posX, posY, id } = this.props
    return <circle cx={posX} cy={posY} r="8" fill={this.fillColor} onClick={() => this.onClickSeat(id)}/>
  }
}