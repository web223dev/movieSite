import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as postActions from 'modules/moviedetail/post';
import * as similarMovieActions from 'modules/moviedetail/similar';
import Daredevil from 'assets/images/Logos/Daredevil.png';
import Slider from "react-slick";
import settings from 'containers/Home/SliderSettings';
import MovieSection from 'components/MovieSection';
import StarRatings from 'react-star-ratings';
import ConvertImage from 'components/ConvertImage';

class MovieDetailContainer extends Component {
    componentDidMount() {
        const { PostActions, SimilarMovieActions } = this.props;
        const id = this.props.location.pathname.substring(7);
        PostActions.getMovieDetail(id);
        SimilarMovieActions.getSimilarMovie(id);
    }
    componentDidUpdate(prevProps) {
        const { PostActions, SimilarMovieActions } = this.props;
        const id = this.props.location.pathname.substring(7)
        const prev_id = prevProps.location.pathname.substring(7)
        if (id !== prev_id) {
            PostActions.getMovieDetail(id);
            SimilarMovieActions.getSimilarMovie(id);
        }
    }
    render() {
        let SimilarMovies;
        const { moviedata, similar_movies } = this.props;
        const sm_movies = similar_movies.results;
        // const settings = {
        //     infinite: false,
        //     speed: 700,
        //     slidesToScroll: 6,
        //     slidesToShow: 6,
        //     initialSlide: 0,
        // };


        if (moviedata.backdrop_path)
            var bgImg = ConvertImage('original', moviedata.backdrop_path);

        if (sm_movies) {
            SimilarMovies = sm_movies.map((smilar_movie, i) => {
                if (smilar_movie.poster_path)
                    var smImg = ConvertImage('original',smilar_movie.poster_path);
                return (
                    <MovieSection
                        mdetail={smilar_movie}
                        bgImg={smImg}
                        pagename="movieDetail"
                        key={i}
                    />
                )
            })
        }
        if (moviedata.vote_average)
            var current_rating = moviedata.vote_average / 2;
        return (
            <div className="mdtitle-wrapper">
                <section className="mdtitle-section" id="section-hero" style={{ backgroundImage: 'url(' + bgImg + ')' }}>
                    <div className="left-gradient-overlay" />
                    <div className="hero-wrapper">
                        <div className="hero-header">
                            <img className="title-logo" src={Daredevil} alt="Daredevil" />
                            <div>{moviedata.title}</div>
                            <StarRatings
                                rating={current_rating}
                                starRatedColor='#b11b1b'
                                starEmptyColor='#ccc'
                                starDimension="20px"
                                starSpacing="0px"
                            />
                            <div className="date_duration">
                                <span className="release-date">{moviedata.release_date}</span>
                                <span className="duration">1 Seasons</span>
                            </div>
                        </div>
                        <div className="btn-group-vertical movie-link-buttons">
                            <button type="button" className="btn btn-primary">OPENLOAD</button>
                            <button type="button" className="btn btn-success">STREAMANGO</button>
                            <button type="button" className="btn btn-danger">MOVHARPOON</button>
                        </div>
                    </div>
                </section>
                <section className="mdsmilar-section">
                    <Slider {...settings}>
                        {SimilarMovies}
                    </Slider>
                </section>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        moviedata: state.moviedetail.data,
        similar_movies: state.similar.data
    }),
    (dispatch) => ({
        PostActions: bindActionCreators(postActions, dispatch),
        SimilarMovieActions: bindActionCreators(similarMovieActions, dispatch)
    })
)(withRouter(MovieDetailContainer));