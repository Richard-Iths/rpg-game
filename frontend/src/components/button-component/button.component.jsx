import React from "react"

import "./button.stylesheet.scss"

export const Button = ({buttonText, clickHandle}) => {
  return(
    <button className="btn" onClick={clickHandle}>{buttonText}</button>
  )
}
