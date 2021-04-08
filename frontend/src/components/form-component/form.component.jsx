import React from "react"
import {InputComponent} from "../input_component/input.component"
import {Button} from "../button-component/button.component"
import "./form.stylesheet.scss"

export const LoginForm = ({}) => {
  return (
    <form className="formwrapper" action="">
      <InputComponent inputType="text" inputLabel="Username"
       />
      <InputComponent inputType="password" inputLabel="Password"
      />
      <Button 
      buttonText={"LOGIN"}
      />
    </form>

  )
}

