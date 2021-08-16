import React from 'react'
import {Promo} from "../Promo/Promo";
import {AboutProject} from "../AboutProject/AboutProject";
import {Technologies} from "../Technoologies/Technologies";
import {AboutMe} from "../AboutMe/AboutMe";
import {Portfolio} from "../Portfolio/Portfolio";

export const Main = () => {
    return (
        <main>
            <Promo/>
            <AboutProject/>
            <Technologies/>
            <AboutMe/>
            <Portfolio/>
        </main>
    )
}
