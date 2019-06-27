import React from 'react';
import { Link } from 'react-router-dom';

const MovieSection = ({ mdetail, bgImg, pagename }) => {
    return (
        <div className="movie-section">
            <Link to={`/movie/${mdetail.id}`} className="movielink">
                <img src={bgImg === undefined ? pagename === 'movieDetail' ? 'http://via.placeholder.com/255x450' : 'http://via.placeholder.com/450x255' : bgImg} alt={mdetail.title} height={pagename === 'movieDetail' ? 298 : 168 } />
            </Link>
        </div>
    );
};

export default MovieSection;