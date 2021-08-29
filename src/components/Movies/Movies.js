import {useEffect, useState} from 'react';
import {SearchForm} from '../SearchForm/SearchForm';
import {MoviesCardList} from '../MoviesCardList/MoviesCardList';
import {Preloader} from '../Preloader/Preloader';
import {MoreContent} from '../MoreContent/MoreContent';
import './Movies.css';
import {
    MORE_BUTTON_BOTTOM_WIDTH_THRESHOLD,
    MORE_BUTTON_RESOLUTION_SETTINGS,
    MORE_BUTTON_TOP_WIDTH_THRESHOLD
} from "../../utils/constants";
import {useWindowWidthSettings} from "../../utils/customHooks";

export const Movies = (props) => {
    // const [isLoading, setIsLoading] = useState(true);
    const [moviesArray, setMoviesArray] = useState([]);

    useEffect(() => {
        // console.log(moviesArray.length <= props.state.numberMovies)
        // console.log(props.state.numberMovies)
        // console.log(moviesArray.length)
        // console.log(props.state)
    })

    useEffect(() => {
        if (!props.state.movieSearchSubmitClick) {
            if (localStorage.filteredMoviesList) {
                return setMoviesArray(JSON.parse(localStorage.filteredMoviesList));
            } else {
                return setMoviesArray(props.state.movieList);
            }
        } else {
            if (props.state.filteredMoviesList.length !== 0 && props.state.movieSearch.length !== '') {
                return setMoviesArray(props.state.filteredMoviesList)
            } else {
                return setMoviesArray([])
            }
        }
    }, [props.state.movieSearchSubmitClick, props.state.filteredMoviesList, props.state.movieList, props.state.movieSearch.length])

    const windowWidth = useWindowWidthSettings();
    useEffect(() => {
        if (windowWidth > MORE_BUTTON_TOP_WIDTH_THRESHOLD) {
            props.setState({ ...props.state, numberMovies: MORE_BUTTON_RESOLUTION_SETTINGS.big.default, addNumberMovies: MORE_BUTTON_RESOLUTION_SETTINGS.big.grow })
        } else if (windowWidth > MORE_BUTTON_BOTTOM_WIDTH_THRESHOLD) {
            props.setState({ ...props.state, numberMovies: MORE_BUTTON_RESOLUTION_SETTINGS.medium.default, addNumberMovies: MORE_BUTTON_RESOLUTION_SETTINGS.medium.grow })
        } else {
            props.setState({ ...props.state, numberMovies: MORE_BUTTON_RESOLUTION_SETTINGS.small.default, addNumberMovies: MORE_BUTTON_RESOLUTION_SETTINGS.small.grow })
        }
    }, [windowWidth]);

    const handleAddMovies = () => props.setState({
        ...props.state,
        numberMovies: props.state.numberMovies + props.state.addNumberMovies
    });

    return (
        <main className='movies'>
            <div className='movies__container'>
                <SearchForm
                    state={props.state}
                    setState={props.setState}
                />
                {props.isLoading
                    ? <Preloader/>
                    : (
                        <>
                            {
                                moviesArray.length > 0
                                    ? <MoviesCardList
                                        moviesArray={moviesArray}
                                        state={props.state}
                                        setState={props.setState}
                                        handleClickSaveMovie={props.handleClickSaveMovie}
                                        handleClickRemoveSavedMovie={props.handleClickRemoveSavedMovie}
                                    />
                                    : <p className='movies__not-found'>Ничего нет</p>
                            }
                            {
                                moviesArray.length <= props.state.numberMovies
                                    ? ''
                                    : <MoreContent handleAddMovies={handleAddMovies} />
                            }
                        </>
                    )
                }
            </div>
        </main>
    );
}
