import './MoreContent.css';

export const MoreContent = (props) => {
    return (
        <div className='more-content'>
            <button className='more-content__button' onClick={props.handleAddMovies}>Ещё</button>
        </div>
    );
}
