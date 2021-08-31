import {MoviesCard} from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export const MoviesCardList = (props) => {
    return (
        <section className='movies-list'>
            <div className='movies-list__container'>
                {
                    props.moviesArray.slice(0, props.state.numberMovies)
                        .map((item) =>
                            <MoviesCard
                                item={item}
                                state={props.state}
                                saved={props.saved}
                                handleClickSaveMovie={props.handleClickSaveMovie}
                                handleClickRemoveSavedMovie={props.handleClickRemoveSavedMovie}
                                key={item._id || item.id}
                            />)
                }
            </div>
        </section>
    );
}
