import './AboutMe.css';
import avatar from '../../images/aboutme/avatar.jpg';

export const AboutMe = () => {
    return(
        <section className={"aboutMe"} id={'student'}>
            <h2 className={'title aboutMe__title'}>Студент</h2>
            <div className={'aboutMe__content'}>
                <img src={avatar} alt={'Аватар'} className={'aboutMe__avatar'}/>
                <div>
                    <h2 className={'aboutMe__name'}>Иван</h2>
                    <p className={'aboutMe__profession'}>Фронтенд-разработчик, 24 года</p>
                    <p className={'aboutMe__desсription'}>
                        Я родился в военном городке Остров-2, закончил МАИ по специальности:
                        'Проектирование авиационных и ракетных двигателей'.
                        Увлекаюсь игровой индустрией. В июле 2020 года начал проявлять интерес к програмированию.
                        С ноября 2017 по март 2021 года работа В ОКБ им А.Люльки. С апреля 2021 работаю фронтенд-разработчиком.
                    </p>
                </div>
                <ul className='list aboutMe__social-links aboutMe__social-links_student'>
                    <li>
                        <a href='https://www.facebook.com/profile.php?id=1334733479' target='_blank' rel='noreferrer' className='link aboutMe__link'>Github</a>
                    </li>
                    <li>
                        <a href='https://vk.com/stepalin' target='_blank' rel='noreferrer' className='link aboutMe__link'>Vk</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
