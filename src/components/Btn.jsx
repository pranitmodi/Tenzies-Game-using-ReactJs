/* eslint-disable react/prop-types */
import "./btn.css"

const Btn = (props) => {
  return (
    <div onClick={props.Click} className="btn" style={{backgroundColor: props.isSelected ? "yellow" : "white" }}>
        <h2>{props.value}</h2>
    </div>
  )
}

export default Btn