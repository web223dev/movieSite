import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TVSection extends Component {
    render() {
        const { mdetail, bgImg, pagename, category, episodeNum, id } = this.props;
        // console.log(episodeNum);
        return (
            <div className="movie-section">
                { episodeNum && <div className="episode">{episodeNum[id]}</div>}
                <Link to={category === "tv" ? `/tv/${mdetail.id}` : `/movie/${mdetail.id}`} className="movielink">
                    <img src={bgImg === undefined ? pagename === 'movieDetail' ? 'http://via.placeholder.com/255x450' : 'http://via.placeholder.com/450x255' : bgImg} alt={mdetail.title} height={pagename === 'movieDetail' ? 298 : 168} />
                </Link>
            </div>
        );
    }
}

export default TVSection;