import React from "react";
import './Footer.css';

export const Footer = () => {
    return (
        <footer className='footer'>
            <p className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__block'>
                <p className='footer__copyright'>© 2021</p>
                <ul className='list social-links footer__social-links'>
                    <li>
                        <a href='https://praktikum.yandex.ru/' target='_blank' rel='noreferrer' className='link footer__social-link'>Яндекс.Практикум</a>
                    </li>
                    <li>
                        <a href='https://github.com/Ivan-Stepalin' target='_blank' rel='noreferrer' className='link footer__social-link'>Github</a>
                    </li>
                    <li>
                        <a href='https://vk.com/stepalin' target='_blank' rel='noreferrer' className='link footer__social-link'>Vkontakte</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
