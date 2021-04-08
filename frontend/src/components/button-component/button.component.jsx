import React from "react"

import "./button.stylesheet.scss"

export const Button = ({buttonText}) => {
  return(
    <button className="btn">{buttonText}</button>
  )
}
