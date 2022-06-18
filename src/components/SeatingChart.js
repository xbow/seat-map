import React, { Component } from 'react'
import Seat from './Seat'


export default class SeatingChart extends Component {
  seats = [
    {x: 120, y: 200, status: 1, category: 1},
    {x: 140, y: 200, status: 1, category: 1},
    {x: 120, y: 220, status: 1, category: 2},
    {x: 160, y: 180, status: 1, category: 3}
  ]

  handleSeatClick = (index) => {
    console.info(`you clicked on seat ${index} `)
  }

  /* Pan and zoom by manipulating these values */

  offsetX = 50
  offsetY = 100
  resX = 400
  resY = 400

  render() {
    const { seats, handleSeatClick, offsetX, offsetY, resX, resY } = this
    const viewBoxSettings = `${offsetX}, ${offsetY}, ${resX}, ${resY}`
    return (
      <svg width="300px" height="300px" viewBox={viewBoxSettings} xmlns="http://www.w3.org/2000/svg" stroke="red" fill="grey">
        { seats.map((seat, index) => <Seat 
            key={index}
            id={index}
            class={`category-${seat.category}`}
            posX={seat.x}
            posY={seat.y}
            category={seat.category}
            onClickSeat={() => handleSeatClick(index)}
          />
        )}
      </svg>
    )
  }
}