import React from "react";
import './NavigationTab.css'

export const NavigationTab = () => {
    return(
        <nav className={'navigation-tab'}>
            <ul className={'navigation-tab__list'}>
                <li>
                    <a href={'#project'} className={'link navigation-tab__link'}>О проекте</a>
                </li>
                <li>
                    <a href={'#technologes'} className={'link navigation-tab__link'}>Технологии</a>
                </li>
                <li>
                    <a href={'#student'} className={'link navigation-tab__link'}>Студент</a>
                </li>
            </ul>
        </nav>
    )
}