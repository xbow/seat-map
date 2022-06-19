import SeatMapRenderer from './SeatMapRenderer'
import ViewBoxControls from './ViewBoxControls'
import seats from '../config/seats'
import { useEffect, useReducer } from 'react'

export default function SeatMap() {
  /* 
    This component would be responsible for fetching seats from the API,
    For now, a hard-coded list of seats is imported above.
  */

  const zoomIncrement = 25
  const panIncrement = 25

  const initialViewBoxParams = {
    offsetX: 40,
    offsetY: 0,
    resolution: 300, 
  }

  const [viewBoxParams, updateViewBox] = useReducer(viewBoxReducer, initialViewBoxParams)

  function handleSeatClick(index) {
    console.info(`you clicked on seat ${index} `)
  }

  function viewBoxReducer(state, action) {
    debugger
    switch (action.type) {
      case 'zoom-in':
        return {...state, resolution: state.resolution - zoomIncrement}
      case 'zoom-out':
        return {...state, resolution: state.resolution + zoomIncrement}
      case 'pan-left':
        return {...state, offsetX: state.offsetX + panIncrement}
      case 'pan-right':
        return {...state, offsetX: state.offsetX - panIncrement}
      case 'pan-up':
        return {...state, offsetY: state.offsetY + panIncrement}
      case 'pan-down':
        return {...state, offsetY: state.offsetY - panIncrement}
      default:
        return state
    }
  }

  useEffect(() => {
    console.log(viewBoxParams)
  }, [viewBoxParams])

  return (
    <main className="seat-map">
      <SeatMapRenderer 
          viewBoxParams={viewBoxParams} 
          seats={seats} 
          onClickSeat={handleSeatClick}/>
      <ViewBoxControls updateViewBox={updateViewBox}/>
    </main>
  )
}