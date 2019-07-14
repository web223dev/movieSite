import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import * as postActions from 'modules/moviedetail/post';
import * as similarMovieActions from 'modules/moviedetail/similar';
import Daredevil from 'assets/images/Logos/Daredevil.png';
import Slider from "react-slick";
import settings from './detailSliderSettings';
import MovieSection from 'components/MovieSection';
import StarRatings from 'react-star-ratings';
import ConvertImage from 'components/ConvertImage';
import Loader from 'components/Loader';
import { withSize } from 'react-sizeme';

class MovieDetailContainer extends Component {
    componentDidMount() {
        const { PostActions, SimilarMovieActions } = this.props;
        const id = this.props.location.pathname.substring(7);
        PostActions.getMovieDetail(id);
        SimilarMovieActions.getSimilarMovie(id);

        // If search movie in searchBox, it will be redirect homepage
        if (this.props.data_loaded) {
            this.props.history.push('/');
        }
    }

    componentDidUpdate(prevProps) {
        //In MovieDetail page, when you click similar movie, it will be render current page again.
        const { PostActions, SimilarMovieActions } = this.props;
        const id = this.props.location.pathname.substring(7)
        const prev_id = prevProps.location.pathname.substring(7)

        if (id !== prev_id) {
            PostActions.getMovieDetail(id);
            SimilarMovieActions.getSimilarMovie(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        // If search movie in searchBox, it will be redirect homepage
        if (nextProps.data_loaded) {
            this.props.history.push('/')
        }
        if (nextProps.errors) {
            console.warn(nextProps.errors)
        }
    }
    render() {
        let SimilarMovies;
        const { moviedata, similar_movies, isLoading, isLoadingMovie, size } = this.props;
        const width = size.width;
        const sm_movies = similar_movies.results;       
        const gradient_color = 'linear-gradient(to right, #181818 0, rgba(24, 24, 24, 0.6) 100%)';
        const mobie_gradient_color = 'background-image: linear-gradient(to top, #181818 0, rgba(24, 24, 24, 0.6) 100%);'

        if (moviedata.backdrop_path)
            var bgImg = ConvertImage('original', moviedata.backdrop_path);

        if (sm_movies) {
            SimilarMovies = sm_movies.map((smilar_movie, i) => {
                if (smilar_movie.poster_path)
                    var smImg = ConvertImage(500, smilar_movie.poster_path);
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
                <section className="mdtitle-section" id="section-hero" style={{ backgroundImage: 'url(' + bgImg + ')'}}>
                    <div className={width < 769 ? 'mobile-loader-wrapper' : 'loader-wrapper'}>
                        {isLoadingMovie && <Loader mobile={width < 769 ? true : false}/>}
                    </div>
                    <div className="left-gradient-overlay" style={{backgroundImage: isLoadingMovie && gradient_color}} />
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
                            <Link to="/watch" className="btn btn-primary">OPENLOAD</Link>
                            <Link to="/watch" className="btn btn-success">STREAMANGO</Link>
                            <Link to="/watch" className="btn btn-danger">MOVHARPOON</Link>
                        </div>
                    </div>
                </section>
                <section className="mdsmilar-section">
                    <Slider {...settings}>
                        {SimilarMovies}
                    </Slider>
                    {isLoading && <Loader />}
                </section>
            </div>
        );
    }
}
const composedMovieDetailContainer = compose(
    withRouter,
    withSize(),
    connect(
        (state) => ({
            isLoadingMovie: state.moviedetail.pending,
            moviedata: state.moviedetail.data,
            similar_movies: state.similar.data,
            isLoading: state.similar.pending,
            data_loaded: state.search_movie.data_loaded
        }),
        (dispatch) => ({
            PostActions: bindActionCreators(postActions, dispatch),
            SimilarMovieActions: bindActionCreators(similarMovieActions, dispatch)
        })
    ),
)

export default composedMovieDetailContainer(MovieDetailContainer);