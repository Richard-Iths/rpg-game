import React, { useEffect } from "react"
import "./home.styles.scss"
import { LoggedIn } from "../../login-component/login.component"
import { LoginForm } from "../../../components/form-component/form.component"
import { useSelector, useDispatch } from "react-redux"
import { createSelector } from "reselect"

const selectUser = createSelector(
  (state) => state.currentUser,
  (user) => user
)

export const Home = () => {
  // const [user, setUser] = useState({ isLoggedIn: false })

  const dispatch = useDispatch()
  useEffect(() => {
    const getUserData = async () => {
      try {
        /*
        const res = await fetch("http://localhost:3000/", {
          headers: { "Content-Type": "application/json" },
        })
        */
        //const data = await res.json()
        dispatch({ type: "SET_USER", payload: null })
      } catch (error) {
        console.log(error)
      }
    }
    getUserData()
  }, [dispatch])

  const user = useSelector(selectUser)

  console.log(user)

  const handleStateChange = (e) => {
    e.preventDefault()
    // setUser({ isLoggedIn: true })
    console.log(user)
  }
  return (
    <section>
      {user ? <LoggedIn /> : <LoginForm handleLoginState={handleStateChange} />}
    </section>
  )
}
