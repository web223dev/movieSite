import React from 'react';
import { Link } from 'react-router-dom';

const MovieSection = ({ mdetail, bgImg }) => {
    return (
        <div className="movie-section">
            <Link to={`/${mdetail.id}`} className="movielink">
                <img src={bgImg === null ? '' : bgImg} alt={mdetail.title} width={290} />
            </Link>
        </div>
    );
};

export default MovieSection;