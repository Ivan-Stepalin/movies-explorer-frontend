import {Link} from 'react-router-dom';
import './Header.css';
import logo from '../../images/header/logo.svg';
import burger from '../../images/header/burger.svg';
import {Navigation} from "../Navigation/Navigation";
import {AccountButton} from "../AccountButton/AccountButton";

export const Header = (props) => {
    const headerColor = (
        `header ${props.isLoggedIn ? "header__loggedIn" : ""}`
    )

    return (
        <header className={headerColor}>
            <Link to='/' className='link header__logo-link'>
                <img src={logo} alt='Лого' className='header__logo'/>
            </Link>
            {
                props.isLoggedIn
                    ? (
                        <>
                            <div className='header__block header__block_login'>
                                <Navigation mobileMenu={false}/>
                                <AccountButton/>
                                <button className='button header__menu' onClick={props.handleClickSidebar}>
                                    <img src={burger} alt='Меню' className='header__menu-icon'/>
                                </button>
                            </div>
                        </>
                    )
                    : (
                        <div className='header__block header__block_nologin'>
                            <Link to='/signup' className='link header__link'>Регистрация</Link>
                            <Link to='/signin'>
                                <button className='button header__link header__login'>Войти</button>
                            </Link>
                        </div>
                    )
            }
        </header>
    );
}
