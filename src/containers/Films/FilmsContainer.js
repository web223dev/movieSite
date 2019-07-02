import React, { Component } from 'react';
import PageHeader from 'components/PageHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as postActions from 'modules/films/postmovie';
import StackGrid from "react-stack-grid";
import MovieSection from 'components/MovieSection';
import ConvertImage from 'components/ConvertImage';

class FilmsContainer extends Component {
    componentDidMount() {
        const { PostActions,  } = this.props;
        PostActions.getPopularMovie();

        // If search movie in searchBox, it will be redirect homepage
        if (this.props.data_loaded) {
            this.props.history.push('/');
        }
    }
    
    componentWillReceiveProps(nextProps){
        // If search movie in searchBox, it will be redirect homepage
        if(nextProps.data_loaded) {
          this.props.history.push('/')
        }
        if(nextProps.errors){
          console.warn(nextProps.errors)
        }
    }
    render() {
        let movieDataShow;
        const { moviedatas } = this.props;
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
            <div className="films collections-container">
                <PageHeader name="Films" />
                <StackGrid
                    // columnWidth={width <= 672 ? '100%' : 298}
                    columnWidth={298}
                    monitorImagesLoaded={true}
                >
                    {movieDataShow}
                </StackGrid>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        moviedatas: state.films.data,
        data_loaded: state.search_movie.data_loaded
    }),
    (dispatch) => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(withRouter(FilmsContainer));