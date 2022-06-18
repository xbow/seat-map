import Seat from './Seat'
import { colors } from '../config/settings'

export default function SeatMap(props) {

  /* Pan and zoom by manipulating these values */
  const offsetX = 40
  const offsetY = 0
  const resX = 300
  const resY = 300

  const { seats, onClickSeat } = props
  const viewBoxSettings = `${offsetX}, ${offsetY}, ${resX}, ${resY}`

  return (
    <svg viewBox={viewBoxSettings} xmlns="http://www.w3.org/2000/svg" stroke={colors.outline} fill="grey">
      { seats.map((seat, index) => <Seat 
          key={index}
          id={index}
          class={`category-${seat.category}`}
          posX={seat.x}
          posY={seat.y}
          category={seat.category}
          status={seat.status}
          onClickSeat={() => onClickSeat(index)}
        />
      )}
    </svg>
  )
}