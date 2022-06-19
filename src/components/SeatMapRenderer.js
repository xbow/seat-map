import Seat from './Seat'
import { colors } from '../config/settings'

export default function SeatMap(props) {
  const { seats, onClickSeat, viewBoxParams } = props
  const { offsetX, offsetY, resolution } = viewBoxParams
  const viewBoxParamString = `${offsetX}, ${offsetY}, ${resolution}, ${resolution}`

  return (
    <svg viewBox={viewBoxParamString} xmlns="http://www.w3.org/2000/svg" stroke={colors.outline}>
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