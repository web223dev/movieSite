import React from 'react';
import { Link } from 'react-router-dom';

const MovieSection = ({ mdetail, bgImg, pagename, category, isLoading }) => {
    return (
        <div className="movie-section">
            <Link to={category === "tv" ? `/tv/${mdetail.id}` : `/movie/${mdetail.id}`} className="movielink">
                {/* <img src={bgImg === undefined ? pagename === 'movieDetail' ? 'http://via.placeholder.com/255x450' : 'http://via.placeholder.com/450x255' : bgImg} alt={mdetail.title} height={pagename === 'movieDetail' ? 298 : 168 } /> */}
                <img src={pagename === 'movieDetail' ? 'http://via.placeholder.com/300x450' : 'http://via.placeholder.com/450x255'} alt={mdetail.title} height={pagename === 'movieDetail' ? 298 : 168} />
                {(pagename === 'movieDetail') && <span className="episodes">20 Episodes</span>}
            </Link>            
        </div>
    );
};

export default MovieSection;