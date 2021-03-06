import {Link} from 'react-router-dom';
import './AccountButton.css';
import accountImage from "../../images/header/account.svg"

export const AccountButton = (props) => {
    return (
        <Link to='/profile'
              className={`link account__link ${props.mobileMenu ? 'account__link_sidebar' : 'account__link_header'}`}>
            <button className={`button account__button`}>
                Аккаунт
                <img
                    src={accountImage}
                    className={'account__image'}
                    alt={'account image'}
                />
            </button>
        </Link>
    );
}
