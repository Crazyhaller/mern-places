import ReactDOM from 'react-dom/client'
import { createPortal } from 'react-dom'
import './Backdrop.css'

const Backdrop = (props) => {
  const content = <div className="backdrop" onClick={props.onClick}></div>

  return createPortal(content, document.getElementById('backdrop-hook'))
}

export default Backdrop
