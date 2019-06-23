import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from 'modules/getmovie/post';
import Slider from "react-slick";
import MovieSection from './MovieSection';
import settings from './SliderSettings';

class TitleList extends Component {
    componentDidMount() {
        const { urlString, PostActions } = this.props;
        if (urlString !== '') {
            PostActions.getMovie(urlString);
        }
    }
    render() {
        let movieDataShow;
        const { title, moviedatas, sectionId } = this.props; console.log(moviedatas.toJS());

        
        if (moviedatas.toJS()[sectionId]) {
            const moviedataDetails = moviedatas.toJS()[sectionId].data.results;
            movieDataShow = moviedataDetails.map((mdetail, i) => {
                if (mdetail.backdrop_path)
                    var bgImg = 'http://image.tmdb.org/t/p/w500' + mdetail.backdrop_path;
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
            <div className="collections-container">
                <div className="collections-row">
                    <h1 className="collections-row-name">{title}</h1>
                    <Slider {...settings}>
                        {movieDataShow}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        moviedatas: state.getmovie.get('data')
    }),
    (dispatch) => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(TitleList);