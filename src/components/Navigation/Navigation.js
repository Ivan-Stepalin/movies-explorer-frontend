import { NavLink } from 'react-router-dom';
import './Navigation.css';

export const Navigation = (props) => {
    return (
        <nav className={`navigation navigation_${props.mobileMenu ? 'sidebar': 'header'}`}>
            <ul
                className={`list navigation__links navigation__links_${props.mobileMenu ? 'sidebar': 'header'}`}
            >
                {
                    props.mobileMenu
                        ? (
                            <li>
                                <NavLink
                                    exact to='/'
                                    className={`link navigation__link navigation__link_${props.mobileMenu ? 'sidebar': 'header'}`}
                                    activeClassName={`navigation__link_${props.mobileMenu ? 'sidebar': 'header'}_active`}
                                >
                                    Главная
                                </NavLink>
                            </li>
                        )
                        : ''
                }
                <li>
                    <NavLink
                        to='/movies'
                        className={`link navigation__link navigation__link_${props.mobileMenu ? 'sidebar': 'header'}`}
                        activeClassName={`navigation__link_${props.mobileMenu ? 'sidebar': 'header'}_active`}
                    >
                        Фильмы
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/saved-movies'
                        className={`link navigation__link navigation__link_${props.mobileMenu ? 'sidebar': 'header'}`}
                        activeClassName={`navigation__link_${props.mobileMenu ? 'sidebar': 'header'}_active`}
                    >
                        Сохранённые фильмы
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
