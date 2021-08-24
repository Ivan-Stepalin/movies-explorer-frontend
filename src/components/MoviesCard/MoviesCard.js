import {useEffect, useState} from 'react'
import './MoviesCard.css'
import LikeEnabled from '../../images/movie/LikeEnabled.svg'
import LikeDisabled from '../../images/movie/LikeDisabled.svg'
import removeIcon from '../../images/movie/remove.svg'

export const MoviesCard = (props) => {
    let isMovieSaved = props.state.savedMovieList.some((movieData) =>
        movieData.nameRU === props.item.nameRU
    )

    const handleClickDelete = () => props.handleClickRemoveSavedMovie(props.item)

    const handleClickSave = () => {
        if (isMovieSaved) {
            const movieIdForDelete = props.state.savedMovieList.find((movieData) =>
                (movieData.nameRU === props.item.nameRU) ? movieData : ''
            )
            props.handleClickRemoveSavedMovie(movieIdForDelete)
        } else {
            const API_MOVIES_BASE_URL = 'https://api.nomoreparties.co'
            const movieData = {
                country: props.item.country || 'Not Found',
                director: props.item.director || 'Not Found',
                duration: props.item.duration || 'Not Found',
                year: props.item.year || 'Not Found',
                description: props.item.description || 'Not Found',
                image: `${API_MOVIES_BASE_URL}${props.item.image.url}` || 'Not Found',
                trailer: props.item.trailerLink || 'Not Found',
                thumbnail: `${API_MOVIES_BASE_URL}${props.item.image.formats.thumbnail.url}` || 'Not Found',
                movieId: props.item.id || 'Not Found',
                nameRU: props.item.nameRU || 'Not Found',
                nameEN: props.item.nameEN || 'Not Found',
            }
            props.handleClickSaveMovie(movieData)
        }
    }

    const handleChangeTime = (time) =>
        (time < 60)
            ? time + 'м'
            : Math.floor(time / 60) + ' ч ' + (time % 60) + ' м'

    return (
        <article className='movie-card'>
            <a href={props.item.trailerLink} target='_blank' rel='noreferrer' className='movie__trailer'>
                <img src={props.item.image.url ? `https://api.nomoreparties.co${props.item.image.url}` : props.item.image} alt={props.item.nameRU} className='movie-card__poster'/>
            </a>
            <div className='movie-card__block'>
                <h2 className='movie-card__title'>{props.item.nameRU}</h2>
                { props.saved
                    ? (<img src={removeIcon} alt='Удалить' className='button movie__saved' onClick={handleClickDelete}/>)
                    : isMovieSaved
                        ? (<img src={LikeEnabled} alt='Сохранено' className='button movie-card__saved' onClick={handleClickSave}/>)
                        : (<img src={LikeDisabled} alt='Не сохранено' className='button movie-card__saved' onClick={handleClickSave}/>)
                }

            </div>
            <p className='movie-card__duration'>{handleChangeTime(props.item.duration)}</p>

        </article>
    )
}
