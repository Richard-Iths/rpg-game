import React from "react";
import { Link } from "react-router-dom";

export const Links = ({ link, name }) => {
  // return <a href={link}>{name}</a>
  return <Link to={link}>{name}</Link>;
};

/*

nu förstod jag vad du mena med dynamisk tidigare

=> t.ex. sedan återanvända det

export const LinkComponent = ({link, name}) => {
    return(
        <a href={link}>{name}</a>
    )
}

*/
