import React from "react"
import {InputComponent} from "../input_component/input.component"
import {Button} from "../button-component/button.component"
import "./form.stylesheet.scss"

export const LoginForm = ({handleLoginState}) => {

  return (
    <div className="formcontainer">
    <form className="formwrapper" action="" >
      <InputComponent inputType="text" inputLabel="Username"
       />
      <InputComponent inputType="password" inputLabel="Password "
      />
      <Button 
      buttonText={"LOGIN"}
      clickHandle={handleLoginState}
      />
    </form>
    <p>Or click <span> <a href="/Register">HERE</a></span> to register</p>
    </div>

  )
}

