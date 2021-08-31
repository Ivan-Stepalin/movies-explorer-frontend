import './Profile.css';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useContext, useEffect} from "react";

export const Profile = (props) => {
    const currentUser = useContext(CurrentUserContext);
    const {values, errors, isValid, handleChange, setValues} = props.useFormWithValidation({});

    useEffect(() => {
        setValues({
            ...values,
            name: currentUser.name,
            email: currentUser.email,
        })
        }, [currentUser])

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleEditProfile(values);
    };


    return (
        <main className='profile'>
            <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
            <form className='profile__form'>
                <label
                    className={`profile__label${errors.name ? ' profile__label_error' : ''}`}
                    // htmlFor='profile-name'
                >
                    Имя
                </label>
                <input
                    type='text'
                    className='profile__input'
                    name='name'
                    value={values.name || ''}
                    onChange={handleChange}
                    disabled={props.state.disableInputs}
                    required
                    minLength={2}
                    maxLength={30}
                />
                <span className='profile__diviner'></span>
                <label
                    className={`profile__label${errors.email ? ' profile__label_error' : ''}`}
                    htmlFor='profile-email'
                >
                    E-mail
                </label>
                <input
                    type='email'
                    className='profile__input'
                    name='email'
                    value={values.email || ''}
                    onChange={handleChange}
                    disabled={props.state.disableInputs}
                    required
                />
                <div className='profile__submit-block'>
                    {
                        errors.name || errors.email || props.errorText
                            ? <span className='profile__error'>{errors.name || errors.email || props.errorText}</span>
                            : ''
                    }
                    {
                        props.successText
                            ? <span className='profile__success'>Успешно</span>
                            : ''
                    }
                    <button
                        type='submit'
                        className='button profile__link profile__link_submit'
                        onClick={handleSubmit}
                        disabled={!isValid || props.state.disableInputs}
                    >
                        Редактировать
                    </button>
                    <button
                        type='button'
                        className='button profile__link profile__link_logout'
                        onClick={props.handleClickLogout}
                    >
                        Выйти из аккаунта
                    </button>
                </div>
            </form>
        </main>
    );
}
