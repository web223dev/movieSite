import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from 'modules/getmovie/post';

class TitleList extends Component {
    componentDidMount() {
        const { urlString, PostActions } = this.props;
        console.log("aurl", urlString);
        if ( urlString !== '') {
            PostActions.getMovie(urlString);
        }
    }
    render() {
        let movieDataShow;
        const { title, moviedatas, sectionId } = this.props;

        if(moviedatas.toJS()[sectionId]){
            // console.log(moviedatas.toJS()[sectionId].data);
            const moviedataDetails = moviedatas.toJS()[sectionId].data.results;
            movieDataShow = moviedataDetails.map((mdetail) => {
                var bgImg = 'http://image.tmdb.org/t/p/original' + mdetail.backdrop_path;
                console.log(bgImg);
                return (
                    <div key={mdetail.id} style={{backgroundImage: 'url(' + bgImg + ')'}}></div>
                )
            })
        }
        return (
            <div>
                <h1>{title}</h1>
                {movieDataShow}                
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