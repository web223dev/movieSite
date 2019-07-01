import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as postActions from 'modules/home/post';
import Slider from "react-slick";
import MovieSection from 'components/MovieSection';
import settings from './SliderSettings';
import ConvertImage from 'components/ConvertImage';

class TitleList extends Component {
    componentWillReceiveProps(nextProps) {
        const { PostActions, urlString } = this.props; 
        if (nextProps.urlString !== urlString && nextProps.urlString !== "") {
            PostActions.getMovie(nextProps.urlString);
        }
    }
    componentDidMount() {
        const { urlString, PostActions } = this.props;
        if (urlString !== "") {
            PostActions.getMovie(urlString);
        }
    }
    render() {
        let movieDataShow, searchedMovieShow;
        const { title, moviedatas, sectionId, searched_movie, data_loaded } = this.props; //console.log("tl", moviedatas.toJS());  

        if (title==='Search Result' && searched_movie.length !== 0) {
            const searchedMovies = searched_movie.results;
            searchedMovieShow = searchedMovies.map((searchedMovie, i) => {
                if (searchedMovie.backdrop_path)
                    var bgImg = ConvertImage(500, searchedMovie.backdrop_path);
                return (
                    <MovieSection
                        mdetail={searchedMovie}
                        bgImg={bgImg}
                        key={i}
                    />
                )
            })
        }
        if (moviedatas.toJS()[sectionId]) {
            const moviedataDetails = moviedatas.toJS()[sectionId].data.results;
            movieDataShow = moviedataDetails.map((mdetail, i) => {
                if (mdetail.backdrop_path)
                    var bgImg = ConvertImage(500, mdetail.backdrop_path);
                return (
                    <MovieSection
                        mdetail={mdetail}
                        bgImg={bgImg}
                        key={i}
                    />
                )
            })
        }
        return (
            <div className={`collections-container ${title==='Search Result' && 'search-movie-section'}`} data-loaded={data_loaded}>
                <div className="collections-row">
                    <h1 className="collections-row-name">{title}</h1>
                    <Slider {...settings}>
                        {searchedMovieShow}
                        {movieDataShow}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        moviedatas: state.home.get('data'),
        searched_movie: state.search_movie.data,
        data_loaded: state.search_movie.data_loaded
    }),
    (dispatch) => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(withRouter(TitleList));