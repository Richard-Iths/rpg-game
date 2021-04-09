import React, { useState } from "react"

import { Links } from "../../components/link-component/link.component"

import "./menu.styles.scss"

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
  const [user] = useState({ name: "MEOWMEOW", color: "black" })

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
          <Links link={item.path} name={item.name} key={item.name} />
        ))}
      </nav>
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
