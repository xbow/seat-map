import React, { Component } from 'react'
import SeatMapRenderer from './SeatMapRenderer'


export default class SeatMap extends Component {
  render() {
    return (
      <main class="seat-map">
        <SeatMapRenderer/>
      </main>
    )
  }
}