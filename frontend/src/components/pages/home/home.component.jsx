import React from 'react'; 

import './home.styles.scss'

import {InputComponent} from '../../../components/input_component/input.component'

export const Home = () => {
    return(
        <form className="home-login-form">
        <button className="login-btn">LOG IN</button>
        <InputComponent inputLabel={"ACCOUNT"} inputType={"text"} />
        <InputComponent inputLabel={"PASSWORD"} inputType={"password"} />
        <button>Don't have an account? Create one!</button>

    </form>
    )
}