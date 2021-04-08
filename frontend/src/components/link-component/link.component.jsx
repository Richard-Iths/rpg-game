import React from "react"

export const Links = ({ link, name }) => {
  // return <a href={link}>{name}</a>
  return (
    <a href="#" onClick={() => link()}>
      {name}
    </a>
  )
}

/*

nu förstod jag vad du mena med dynamisk tidigare

=> t.ex. sedan återanvända det

export const LinkComponent = ({link, name}) => {
    return(
        <a href={link}>{name}</a>
    )
}

*/
