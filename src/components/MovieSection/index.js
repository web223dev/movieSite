import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';

const MovieSection = ({ mdetail, bgImg, pagename, category, isLoading }) => {
    return (
        <div className="movie-section">
            {/* <img src={bgImg === undefined ? pagename === 'movieDetail' ? 'http://via.placeholder.com/255x450' : 'http://via.placeholder.com/450x255' : bgImg} alt={mdetail.title} height={pagename === 'movieDetail' ? 298 : 168 } /> */}
            {/* <img src={bgImg === undefined ? pagename === 'movieDetail' ? 'http://via.placeholder.com/255x450' : 'http://via.placeholder.com/450x255' : bgImg} alt={mdetail.title} /> */}
            <img src={pagename === 'movieDetail' ? 'http://via.placeholder.com/300x450' : 'http://via.placeholder.com/450x255'} alt={mdetail.title} height={pagename === 'movieDetail' ? 298 : 168} />
            {/* <img src={pagename === 'movieDetail' ? 'http://via.placeholder.com/300x450' : 'http://via.placeholder.com/450x255'} alt={mdetail.title} /> */}
            {(pagename === 'movieDetail') && <span className="episodes">20 Episodes</span>}
            <div className="gradient-overlay"></div>
            <Link to={category === "tv" ? `/tv/${mdetail.id}` : `/movie/${mdetail.id}`} className="movielink"><FontAwesomeIcon icon={faShareSquare} /></Link>
        </div>
    );
};

export default MovieSection;