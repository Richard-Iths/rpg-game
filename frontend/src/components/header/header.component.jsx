import React from "react"
import { Links } from "../../components/link-component/link.component"

import "./menu.styles.scss"

import { useDispatch } from "react-redux"
import { setUserLoggedIn, setUserProfile } from "../../redux/root-reducer"

export const Header = () => {
  const dispatch = useDispatch()
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
      <button onClick={() => dispatch({ type: "LOGOUT_USER" })}>
        dispatch
      </button>
    </header>
  )
}

/*


<button
onClick={() => dispatch(SET_USER({ name: "Skurt", color: "green" }))}
>       dispatch skurt
      </button>

*/
