import React from "react"
import { InputComponent } from "../input_component/input.component"
import { Button } from "../button-component/button.component"
import "./form.stylesheet.scss"

import { useDispatch } from "react-redux"

export const LoginForm = ({ handleLoginState }) => {
  const dispatch = useDispatch()
  async function login(e) {
    console.log(e)
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:3000/", {
        headers: { "Content-Type": "application/json" },
      })
      const data = await res.json()
      dispatch({ type: "SET_USER", payload: data })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="formcontainer">
      <form className="formwrapper" action="">
        <InputComponent inputType="text" inputLabel="Username" />
        <InputComponent inputType="password" inputLabel="Password " />
        <Button buttonText={"LOGIN"} clickHandle={login} />
      </form>
      <p>
        Or click{" "}
        <span>
          {" "}
          <a href="/Register">HERE</a>
        </span>{" "}
        to register
      </p>
    </div>
  )
}

/*

  const dispatch = useDispatch()
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch("http://localhost:3000/", {
          headers: { "Content-Type": "application/json" },
        })
        const data = await res.json()
        dispatch({ type: "SET_USER", payload: null })
      } catch (error) {
        console.log(error)
      }
    }
    getUserData()
  }, [dispatch])





*/
