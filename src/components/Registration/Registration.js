import './Registration.css';
import logo from '../../images/login/logo.svg';
import {Link} from "react-router-dom";

export const Registration = (props) => {
    const { values, errors, isValid, handleChange } = props.useFormWithValidation({});

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleClickRegistration(values);
    };

    return (
        <main className='auth'>
            <div className='auth__container'>
                <Link to='/'>
                    <img src={logo} alt='Лого' className='auth__logo'/>
                </Link>
                <h2 className='auth__title'>Добро пожаловать!</h2>
                <form className='auth__form' onSubmit={handleSubmit}>
                    <label className='auth__label'>Имя</label>
                    <input
                        type='text'
                        className={`auth__input${errors.email ? ' auth__input_error' : ''}`}
                        name='name'
                        value={values.name || ''}
                        onChange={handleChange}
                        required
                        minLength={2}
                        maxLength={30}
                    />
                    {
                        errors.name
                            ? <span className='auth__error auth__error_input'>{errors.name}</span>
                            : ''
                    }
                    <label className='auth__label'>E-mail</label>
                    <input
                        type='email'
                        className={`auth__input${errors.email ? ' auth__input_error' : ''}`}
                        name='email'
                        value={values.email || ''}
                        onChange={handleChange}
                        required
                    />
                    {
                        errors.email
                            ? <span className='auth__error auth__error_input'>{errors.email}</span>
                            : ''
                    }
                    <label className='auth__label'>Пароль</label>
                    <input
                        type='password'
                        className={`auth__input${errors.email ? ' auth__input_error' : ''}`}
                        name='password'
                        value={values.password || ''}
                        onChange={handleChange}
                        required
                    />
                    {
                        errors.password
                            ? <span className='auth__error auth__error_input'>{errors.password}</span>
                            : ''
                    }
                    {/*<span className='auth__error'>Что-то пошло не так...</span>*/}
                    <div className='auth__submit-block'>
                        {
                            props.errorText
                                ? <span className='auth__error auth__error_submit'>{props.errorText}</span>
                                : ''
                        }
                        <button
                            type='submit'
                            className='button auth__submit'
                            onClick={handleSubmit}
                            disabled={!isValid || props.state.disableInputs}
                        >
                            Зарегистрироваться
                        </button>
                        <p className='auth__registr-text'>
                            Уже зарегистрированы? <Link to='/signin' className='link auth__register-link'>Войти</Link>
                        </p>
                    </div>
                    {/*<button*/}
                    {/*    type='submit'*/}
                    {/*    className='button auth__submit auth__submit_register'*/}
                    {/*    // onClick={props.handleClickRegistration}*/}
                    {/*    // onClick={handleSubmit}*/}
                    {/*>*/}
                    {/*    Зарегистрироваться*/}
                    {/*</button>*/}
                    {/*<p className='auth__registr-text'>*/}
                    {/*    Уже зарегистрированы? <Link to='/signin' className='link auth__register-link'>Войти</Link>*/}
                    {/*</p>*/}
                </form>
            </div>
        </main>
    )
}
