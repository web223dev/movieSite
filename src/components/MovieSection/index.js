import React from 'react';
import { Link } from 'react-router-dom';

const MovieSection = ({ mdetail, bgImg, pagename }) => {
    return (
        <div className="movie-section">
            <Link to={`/movie/${mdetail.id}`} className="movielink">
                <img src={bgImg === null ? '' : bgImg} alt={mdetail.title} height={pagename === 'movieDetail' ? 298 : 168 } />
            </Link>
        </div>
    );
};

export default MovieSection;