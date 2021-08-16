import { useState } from 'react';
import './MoviesCard.css';
import LikeEnabled from '../../images/movie/LikeEnabled.svg';
import LikeDisabled from '../../images/movie/LikeDisabled.svg';
import removeIcon from '../../images/movie/remove.svg';
import poster from '../../images/movie/poster.svg';

export const MoviesCard = (props) => {
    const [isMovieLiked, setIsMovieLiked] = useState(false);

    const handleClickSave = () => {
        isMovieLiked ? setIsMovieLiked(false) : setIsMovieLiked(true);
    };

    const handleClickDelete = (e) => e.currentTarget.closest('.movie').remove();

    return (
        <article className='movie-card'>
            <img src={poster} alt='33 слова о дизайне' className='movie-card__poster'/>
            <div className='movie-card__block'>
                <h2 className='movie-card__title'>
                    33 слова о дизайне
                </h2>

                { props.saved
                    ? (<img src={removeIcon} alt='Удалить' className='button movie-card__saved' onClick={handleClickDelete}/>)
                    : isMovieLiked
                        ? (<img src={LikeEnabled} alt='Сохранено' className='button movie-card__saved' onClick={handleClickSave}/>)
                        : (<img src={LikeDisabled} alt='Не сохранено' className='button movie-card__saved' onClick={handleClickSave}/>)
                }
            </div>
            <div>
                <p className='movie-card__duration'>2ч 30м</p>
            </div>
        </article>
    );
}
