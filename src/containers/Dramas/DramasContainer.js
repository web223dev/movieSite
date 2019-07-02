import React, { Component } from 'react';
import PageHeader from 'components/PageHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as dramaActions from 'modules/dramas/postdrama';
import StackGrid from "react-stack-grid";
import MovieSection from 'components/MovieSection';
import ConvertImage from 'components/ConvertImage';

class FilmsContainer extends Component {
    componentDidMount() {
        const { DramaActions,  } = this.props;
        DramaActions.getPopularDrama();

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
        let dramaDataShow;
        const { dramadatas } = this.props;
        const ddatas = dramadatas.results;
        if (ddatas !== undefined) {
            dramaDataShow = ddatas.map((ddata, i) => {
                if (ddata.backdrop_path)
                    var bgImg = ConvertImage(500, ddata.backdrop_path);
                return (
                    <MovieSection
                        mdetail={ddata}
                        bgImg={bgImg}
                        category="tv"
                        key={i}
                    />
                )
            })
        }
        return (
            <div className="collections-container">
                <PageHeader name="Dramas" />
                <StackGrid
                    // columnWidth={width <= 672 ? '100%' : 298}
                    columnWidth={298}
                    monitorImagesLoaded={true}
                >
                    {dramaDataShow}
                </StackGrid>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        dramadatas: state.dramas.data,
        data_loaded: state.search_movie.data_loaded
    }),
    (dispatch) => ({
        DramaActions: bindActionCreators(dramaActions, dispatch)
    })
)(withRouter(FilmsContainer));