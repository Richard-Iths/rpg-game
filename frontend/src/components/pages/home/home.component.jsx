import React from "react"
import "./home.styles.scss"

import { LoginForm } from "../../../components/form-component/form.component"
export const Home = () => {
  return (
    <section>
      <LoginForm />
      <p>
        Or click{" "}
        <span>
          {" "}
          <a href="/Register">HERE</a>
        </span>{" "}
        to register
      </p>
    </section>
  )
}
