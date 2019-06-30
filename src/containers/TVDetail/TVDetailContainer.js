import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as dramaActions from 'modules/tvdetail/postdrama';
import * as similarTVActions from 'modules/tvdetail/similartv';
import Daredevil from 'assets/images/Logos/Daredevil.png';
import Slider from "react-slick";
import settings from 'containers/MovieDetail/detailSliderSettings';
import TVSection from 'components/TVSection';
import StarRatings from 'react-star-ratings';
import ConvertImage from 'components/ConvertImage';

class TVDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            episodes_count: this.props
        }
    }

    componentDidMount() {
        const { DramaActions, SimilarTVActions } = this.props;
        const id = this.props.location.pathname.substring(4);
        DramaActions.getDramaDetail(id);
        SimilarTVActions.getSimilarTV(id);
        console.log('1')

        // If search movie in searchBox, it will be redirect homepage
        if (this.props.data_loaded) {
            this.props.history.push('/');
        }
        // if (similar_tv.results)
        //     similar_tv.results.map((sm_tv) => DramaActions.getDramaEpisodes(sm_tv.id))
    }
    componentDidUpdate(prevProps) {
        //In MovieDetail page, when you click similar movie, it will be render current page again.
        const { DramaActions, SimilarTVActions } = this.props;
        const id = this.props.location.pathname.substring(4)
        const prev_id = prevProps.location.pathname.substring(4)
        if (id !== prev_id) {            
            DramaActions.getDramaDetail(id);
            SimilarTVActions.getSimilarTV(id);
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
        let SimilarTVs;
        const { dramadata, similar_tv } = this.props; //console.log(dramadata);
        const sm_tvs = similar_tv.results; //console.log(episode_num);

        if (dramadata.backdrop_path)
            var bgImg = ConvertImage('original', dramadata.backdrop_path);

        // console.log(episode_num)
        if (sm_tvs) {
            SimilarTVs = sm_tvs.map((smilar_tv, i) => {
                
                if (smilar_tv.poster_path)
                    var smImg = ConvertImage(500, smilar_tv.poster_path);
                return (
                    <TVSection
                        mdetail={smilar_tv}
                        bgImg={smImg}
                        pagename="movieDetail"
                        category="tv"
                        key={i}
                    />
                )
            })
        }
        if (dramadata.vote_average)
            var current_rating = dramadata.vote_average / 2;
        return (
            <div className="mdtitle-wrapper">
                <section className="mdtitle-section" id="section-hero" style={{ backgroundImage: 'url(' + bgImg + ')' }}>
                    <div className="left-gradient-overlay" />
                    <div className="hero-wrapper">
                        <div className="hero-header">
                            <img className="title-logo" src={Daredevil} alt="Daredevil" />
                            <div>{dramadata.original_name}</div>
                            <StarRatings
                                rating={current_rating}
                                starRatedColor='#b11b1b'
                                starEmptyColor='#ccc'
                                starDimension="20px"
                                starSpacing="0px"
                            />
                            <div className="date_duration">
                                <span className="release-date">{dramadata.first_air_date}</span>
                                <span className="duration">{dramadata.number_of_seasons} Seasons</span>
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
                        {SimilarTVs}
                    </Slider>
                </section>
            </div>
        );
    }
}
export default connect(
    (state) => ({
        dramadata: state.tvdetail.data,
        similar_tv: state.similartv.data,
        data_loaded: state.search_movie.data_loaded
    }),
    (dispatch) => ({
        DramaActions: bindActionCreators(dramaActions, dispatch),
        SimilarTVActions: bindActionCreators(similarTVActions, dispatch)
    })
)(withRouter(TVDetailContainer));