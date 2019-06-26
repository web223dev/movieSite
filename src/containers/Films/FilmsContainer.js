import React, { Component } from 'react';
import PageHeader from 'components/PageHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from 'modules/films/postmovie';
import StackGrid from "react-stack-grid";
import MovieSection from 'components/MovieSection';
import ConvertImage from 'components/ConvertImage';

class FilmsContainer extends Component {
    componentDidMount() {
        const { PostActions } = this.props;
        PostActions.getPopularMovie();
    }
    render() {
        let movieDataShow;
        const { moviedatas } = this.props; //console.log("Fm", moviedatas.results);   
        const mdatas = moviedatas.results;
        if (mdatas !== undefined) {
            movieDataShow = mdatas.map((mdata, i) => {
                if (mdata.backdrop_path)
                    var bgImg = ConvertImage(500, mdata.backdrop_path);
                return (
                    <MovieSection
                        mdetail={mdata}
                        bgImg={bgImg}
                        key={i}
                    />
                )
            })
        }
        return (
            <div className="collections-container">
                <PageHeader name="Films" />
                <StackGrid
                    // columnWidth={width <= 672 ? '100%' : 298}
                    columnWidth={298}
                >
                    {movieDataShow}
                </StackGrid>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        moviedatas: state.films.data
    }),
    (dispatch) => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(FilmsContainer);