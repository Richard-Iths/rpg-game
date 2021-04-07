import React from 'react'; 

import './home-login.styles.scss'

import {HomeLoginInput} from '../home login input/home-login-input.component'

export const HomeLogin = () => {
    return(
        <div className="home-login">
        <button className="login-btn">LOG IN</button>
        <HomeLoginInput inputLabel={"ACCOUNT"} inputType={"text"} />
        <HomeLoginInput inputLabel={"PASSWORD"} inputType={"password"} />
        <button>Don't have an account? Create one!</button>

    </div>
    )
}
