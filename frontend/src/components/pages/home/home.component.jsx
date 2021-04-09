import React, { useState } from "react"
import "./home.styles.scss"
import { LoggedIn } from "../../login-component/login.component"
import { LoginForm } from "../../../components/form-component/form.component"

export const Home = () => {
  const [user, setUser] = useState({ isLoggedIn: false })
  const handleStateChange = (e) => {
    e.preventDefault()
    setUser({ isLoggedIn: true })
    console.log(user)
  }
  return (
    <section>
      {user.isLoggedIn ? (
        <LoggedIn />
      ) : (
        <LoginForm handleLoginState={handleStateChange} />
      )}
    </section>
  )
}
