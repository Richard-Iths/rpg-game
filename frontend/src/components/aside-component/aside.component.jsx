import React from 'react'; 
import {Links} from '../link-component/link.component';

export const Aside = () => {
    const asides = [
        {
            name: "Characters",
            path: "/characters",
        },
        {
            name: "New Game",
            path: "/newgame",
        },
        {
            name: "Continue",
            path: "/continue",
        },
        {
            name: "Create character",
            path: "/createcharacter",
        },
        {
            name: "Chat", 
            path: "/chat",
        },
    ];
    return (
        <div className="aside-wrapper">
            {asides.map((item) => (
                <Links link={item.path} name={item.name} key={item.name} />
            ))}

        </div>

    )
}