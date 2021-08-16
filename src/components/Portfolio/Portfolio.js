import './Portfolio.css';

export const Portfolio = () => {
    return (
        <div className='portfolio'>
            <h3 className='portfolio__title'>Портфолио</h3>
            <ul className='list'>
                <li className='portfolio__item'>
                    <a href='https://github.com/Ivan-Stepalin/how-to-learn' target='_blank' rel='noreferrer' className='link portfolio__link'>Статичный сайт</a>
                </li>
                <li className='portfolio__item'>
                    <a href='https://github.com/Ivan-Stepalin/russian-travel' target='_blank' rel='noreferrer' className='link portfolio__link'>Адаптивный сайт</a>
                </li>
                <li className='portfolio__item'>
                    <a href='https://github.com/Ivan-Stepalin/react-mesto-api-full' target='_blank' rel='noreferrer' className='link portfolio__link'>Одностраничное приложение</a>
                </li>
            </ul>
        </div>
    );
}
