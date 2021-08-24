import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/login/logo.svg';

export const Login = (props) => {
    const { values, errors, isValid, handleChange } = props.useFormWithValidation({});

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleClickLogin(values);
    };

    return (
        <main className='auth'>
            <div className='auth__container'>
                <Link to='/'>
                    <img src={logo} alt='Лого' className='auth__logo'/>
                </Link>
                <h2 className='auth__title'>Рады видеть!</h2>
                <form className='auth__form'>
                    <label className='auth__label' htmlFor='auth__email'>E-mail</label>
                    <input
                        type='email'
                        id='auth__email'
                        className={`auth__input${errors.email ? ' auth__input_error' : ''}`}
                        name='email'
                        value={values.email || ''}
                        onChange={handleChange}
                        disabled={props.state.disableInputs}
                        required
                    />
                    {
                        errors.email
                            ? <span className='auth__error auth__error_input'>{errors.email}</span>
                            : ''
                    }
                    <label className='auth__label' htmlFor='auth__password'>Пароль</label>
                    <input
                        type='password'
                        id='auth__password'
                        className={`auth__input${errors.password ? ' auth__input_error' : ''}`}
                        name='password'
                        value={values.password || ''}
                        onChange={handleChange}
                        disabled={props.state.disableInputs}
                        required
                    />
                    {
                        errors.password
                            ? <span className='auth__error auth__error_input'>{errors.password}</span>
                            : ''
                    }
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
                            Войти
                        </button>
                        <p className='auth__registr-text'>
                            Ещё не зарегистрированы? <Link to='/signup' className='link auth__register-link'>Регистрация</Link>
                        </p>
                    </div>
                </form>
            </div>
        </main>
    );
}
