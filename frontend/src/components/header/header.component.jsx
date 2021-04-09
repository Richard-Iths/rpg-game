import React, { useEffect, useState } from "react"
import { Links } from "../../components/link-component/link.component"

import "./menu.styles.scss"

import { useDispatch } from "react-redux"

export const Header = () => {
  // const skurt = async () => {
  //   await fetch("http://localhost:3000", {
  //     method: "Get",
  //     headers: {
  //       "Content-Type": "Application/Json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error))
  // }
  const [user, setUser] = useState({ name: "MEOWMEOW", color: "black" })
  const dispatch = useDispatch()
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch("http://localhost:3000/", {
          headers: { "Content-Type": "application/json" },
        })
        const data = await res.json()
        setUser(data)
        dispatch({ type: "SET_USER", payload: data })
      } catch (error) {
        console.log(error)
      }
    }
    getUserData()
  }, [dispatch])

  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Game",
      path: "/game",
    },
    {
      name: "Register",
      path: "/register",
    },
  ]
  return (
    <header>
      <nav className="menu">
        {menu.map((item) => (
          <Links link={item.path} name={item.name} />
        ))}
      </nav>
      <button onClick={() => dispatch({ type: "SET_USER" })}>dispatch</button>
      <div>
        <h1>
          {user.name} {user.color}
        </h1>
      </div>
    </header>
  )
}

/*


<button
onClick={() => dispatch(SET_USER({ name: "Skurt", color: "green" }))}
>       dispatch skurt
      </button>

*/
