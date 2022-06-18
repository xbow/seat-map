import React, { Component } from 'react'
import Seat from './Seat'
import { seats } from '../config/seats'

export default class SeatMap extends Component {
  handleSeatClick = (index) => {
    console.info(`you clicked on seat ${index} `)
  }

  /* Pan and zoom by manipulating these values */

  offsetX = 40
  offsetY = 0
  resX = 300
  resY = 300

  render() {
    const { handleSeatClick, offsetX, offsetY, resX, resY } = this
    const viewBoxSettings = `${offsetX}, ${offsetY}, ${resX}, ${resY}`
    return (
      <svg viewBox={viewBoxSettings} xmlns="http://www.w3.org/2000/svg" stroke="red" fill="grey">
        { seats.map((seat, index) => <Seat 
            key={index}
            id={index}
            class={`category-${seat.category}`}
            posX={seat.x}
            posY={seat.y}
            category={seat.category}
            status={seat.status}
            onClickSeat={() => handleSeatClick(index)}
          />
        )}
      </svg>
    )
  }
}