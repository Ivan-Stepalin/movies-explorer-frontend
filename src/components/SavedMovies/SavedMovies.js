import { useEffect, useState } from 'react';
import {SearchForm} from '../SearchForm/SearchForm';
import {MoviesCardList} from '../MoviesCardList/MoviesCardList';
import {Preloader} from '../Preloader/Preloader';
import {MoreContent} from '../MoreContent/MoreContent';
import './SavedMovies.css';

export const SavedMovies = (props) => {
    const [moviesArray, setMoviesArray] = useState([]);
    useEffect(() => {
        if (!props.state.movieSavedSearchSubmitClick) {
            // if (localStorage.filteredSavedMovieList) {
            //   return setMoviesArray(JSON.parse(localStorage.filteredSavedMovieList));
            // } else {
            return setMoviesArray(props.state.savedMovieList);
            // }
        } else {
            if (props.state.filteredSavedMovieList.length !== 0 && props.state.savedMovieSearch.length !== '') {
                return setMoviesArray(props.state.filteredSavedMovieList);
            } else {
                return setMoviesArray([]);
            }
        }
    }, [props.state.movieSavedSearchSubmitClick, props.state.filteredSavedMovieList, props.state.savedMovieList, props.state.savedMovieSearch.length]);

    return (
        <main className='movies'>
            <div className='movies__container'>
                <SearchForm
                    state={props.state}
                    setState={props.setState}
                    saved={true}
                />
                { props.isLoading
                    ? <Preloader />
                    : (
                        moviesArray.length > 0
                            ? <MoviesCardList
                                moviesArray={moviesArray}
                                state={props.state}
                                setState={props.setState}
                                saved={true}
                                handleClickRemoveSavedMovie={props.handleClickRemoveSavedMovie}
                            />
                            : <p className='movies__not-found'>Ничего нет</p>
                    )
                }
            </div>
        </main>
    );
}
