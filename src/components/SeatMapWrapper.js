import SeatMapRenderer from './SeatMapRenderer'
import seats from '../config/seats'

export default function SeatMap() {
  /* 
    This component is responsible to fetch seats from the API.
    For now, a hard-coded list of seats is imported above.
  */

  function handleSeatClick(index) {
    console.info(`you clicked on seat ${index} `)
  }

  return (
    <main className="seat-map">
      <SeatMapRenderer seats={seats} onClickSeat={handleSeatClick}/>
    </main>
  )
}