export default function ViewBoxControls(props) {
  return (
    <div className="viewBoxControls">
      <div className="legend">
        These buttons have been added as a quick demonstration 
        of how the seat-map SVG can be zoomed and panned.
        Ideally, this will later be controlled by mouse and touch events.
      </div>
      <button type="button" onClick={() => props.updateViewBox({type: 'zoom-in'})}>in</button>
      <button type="button" onClick={() => props.updateViewBox({type: 'zoom-out'})}>out</button>
      <button type="button" onClick={() => props.updateViewBox({type: 'pan-left'})}>left</button>
      <button type="button" onClick={() => props.updateViewBox({type: 'pan-right'})}>right</button>
      <button type="button" onClick={() => props.updateViewBox({type: 'pan-up'})}>up</button>
      <button type="button" onClick={() => props.updateViewBox({type: 'pan-down'})}>down</button>
    </div>
  )
}