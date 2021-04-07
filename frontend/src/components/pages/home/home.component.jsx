import React from 'react';
import { HomeLogin } from  '../home login/home-login.component'

import './home.styles.scss'

export const Home = () => {
    return(
        <section className="home">
            <h1>Skurt</h1>
            <HomeLogin />

        </section>
    ) 
}