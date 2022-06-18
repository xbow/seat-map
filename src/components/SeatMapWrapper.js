import React, { Component } from 'react'
import SeatMapRenderer from './SeatMapRenderer'
import seats from '../config/seats'

export default class SeatMap extends Component {
  /* 
    This component is responsible to fetch seats from the API.
    For now, a hard-coded list of seats is imported above.
  */

  handleSeatClick = (index) => {
    console.info(`you clicked on seat ${index} `)
  }

  render() {
    return (
      <main className="seat-map">
        <SeatMapRenderer seats={seats} onClickSeat={this.handleSeatClick}/>
      </main>
    )
  }
}