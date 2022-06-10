import React from 'react'
import './Alert.css'

const Alert = ({ children, type, closeClick }) => {
  return (
    <div className={`alert ${type}`}>
      <span>{children}</span>
      <span className="close" onClick={closeClick}>
        &times;
      </span>
    </div>
  )
}

export default Alert
