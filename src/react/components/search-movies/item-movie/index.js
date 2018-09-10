import React from 'react';
import './item-movie.scss';

const ItemMovie = ({posterPath, title, overview, releaseDate}) => {
    return (
        <div className="item-movie">
            <div className="item-movie__poster">
                <h2 className="item-movie__title item-movie__title">{title}</h2>
                <img src={posterPath} alt={title} />
                <div className="item-movie__release-date">({releaseDate})</div>
            </div>
            <div className="item-movie__info">
                <h2 className="item-movie__title item-movie__title--desktop">{title}</h2>
                <div className="item-movie__overview">{overview}</div>
            </div>
        </div>
    )
}

export default ItemMovie;
