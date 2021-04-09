import React from 'react'; 
import {Chat} from '../chat-component/chat.component'
import {Aside} from '../aside-component/aside.component'

export const LoggedIn = () => {
    return (
        <section>
            <Chat />
            <Aside />
        </section>
    )
}