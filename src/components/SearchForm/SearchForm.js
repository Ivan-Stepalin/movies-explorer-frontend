import { useState } from 'react'
import { SHORT_MOVIE_DURATION } from '../../utils/constants'
import './SearchForm.css'

export const SearchForm = (props) => {
    const [stateCheckbox, setStateCheckbox] = useState(false)

    const handleFilter = (movieList, movieSearch) => {
        const filtered = movieList.nameRU
            .toLowerCase()
            .includes(movieSearch.toLowerCase())
        return filtered
    }

    const filteringMoviesArray = (movieList, searchValue) => {
        if (stateCheckbox) {
            const shortMovie = movieList.filter((movie) => movie.duration <= SHORT_MOVIE_DURATION && handleFilter(movie, searchValue))
            return shortMovie
        } else {
            const filteredMovies = movieList.filter((movie) => handleFilter(movie, searchValue))
            return filteredMovies
        }
    }

    const handleChange = (e) => {
        if (props.saved) {
            props.setState({ ...props.state, savedMovieSearch: e.target.value })
        } else {
            props.setState({ ...props.state, movieSearch: e.target.value })
        }
    }
    const handleChangeReplicaCheckbox = () => setStateCheckbox(!stateCheckbox)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (props.saved) {
            props.setState({ ...props.state, savedMovieSearch: e.target.value })
            const filteredSavedMoviesArray = filteringMoviesArray(props.state.savedMovieList, props.state.savedMovieSearch)
            props.setState({
                ...props.state,
                filteredSavedMovieList: filteredSavedMoviesArray,
                movieSavedSearchSubmitClick: true,
            })
            localStorage.setItem('filteredSavedMovieList', JSON.stringify(filteredSavedMoviesArray))
        } else {
            props.setState({ ...props.state, movieSearch: e.target.value })
            const filteredMoviesArray = filteringMoviesArray(props.state.movieList, props.state.movieSearch)
            console.log(filteredMoviesArray)
            props.setState({
                ...props.state,
                filteredMoviesList: filteredMoviesArray,
                movieSearchSubmitClick: true,
            })
            localStorage.setItem('filteredMoviesList', JSON.stringify(filteredMoviesArray))
        }
    }

    return (
        <form className='search'>
            <div className={"search__container"}>
                <fieldset className='search__fieldset'>
                    <input
                        type='text'
                        className='search__input'
                        name='search'
                        placeholder='Фильм'
                        required
                        value={props.saved ? props.state.savedMovieSearch : props.state.movieSearch}
                        onChange={handleChange}
                    />
                    <button className='button search__submit' onClick={handleSubmit}>
                        Найти
                    </button>
                </fieldset>
                <div className='button search__switch'>
                    <span className='search__switch-checkbox'>
                      <input
                          type='checkbox'
                          id='switch'
                          className='search__switch-input'
                          name='checkbox'
                          checked={stateCheckbox}
                          onChange={handleChange}
                      />
                      <span className='search__switch-checkbox-replica' onClick={handleChangeReplicaCheckbox}>
                        <span className='search__switch-checkbox-knob'/>
                      </span>
                    </span>
                    <label htmlFor='switch' className='search__switch-text'>Короткометражки</label>
                </div>
            </div>
        </form>
    )
}
