import React from "react";
import './Technologies.css'

export const Technologies = () => {
    return (
        <section className='technologies__container' id='technologes'>
            <p className='technologies__title'>
                Технологии
            </p>
            <hr className='technologies__underline'/>
            <div className='technologies__box'>
                <p className='technologies__subtitle'>
                    7 Технологий</p>
                <p className='technologies__description'>
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>
                <ul className='list technologies__list'>
                    <li className='technologies__item'>
                        <p>
                            HTML
                        </p>
                    </li>
                    <li className='technologies__item'>
                        <p>
                            CSS
                        </p>
                    </li>
                    <li className='technologies__item'>
                        <p>
                            JS
                        </p>
                    </li>
                    <li className='technologies__item'>
                        <p>
                            React
                        </p>
                    </li>
                    <li className='technologies__item'>
                        <p>
                            Git
                        </p>
                    </li>
                    <li className='technologies__item'>
                        <p>
                            Express.js
                        </p>
                    </li>
                    <li className='technologies__item'>
                        <p>
                            mongoDB
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
