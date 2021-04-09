import React from 'react'; 
import {InputComponent} from '../input_component/input.component'
import {Button} from '../button-component/button.component'

export const Chat = () => {
    return(
        <div className="chat-wrapper">
            <h1>JOIN CHAT</h1>
            <InputComponent />
            <Button
            buttonText={"JOIN"}
            />

        </div>

    )
}