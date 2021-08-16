import {MoviesCard} from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export const MoviesCardList = (props) => {
    return (
        <section className='movies-list'>
            <div className='movies-list__container'>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
                <MoviesCard saved={props.saved}/>
            </div>
        </section>
    );
}
