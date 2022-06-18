import { colors, settings } from '../config/settings'

export default function Seat(props) {
  const { posX, posY, id, category, status } = props
  const { seatRadius } = settings
  
  /* 
    This could select the seat for booking a ticket
  */ 
  function onClickSeat() {
    console.info(`you clicked on seat ${id}, which is ${status === 1 ? 'available' : 'unavailable' } `)
  }

  /*
    Colors are defined in a settings file to allow for customization
  */
  function getFillColor() {
    if (status === 0) {
      return colors.unavailable;
    }
    return colors.categoryColors[category]
  }

  return <circle cx={posX} cy={posY} r={seatRadius} fill={getFillColor()} onClick={() => onClickSeat()}/>
}