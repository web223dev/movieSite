import React, { Component } from 'react';
import PageHeader from 'components/PageHeader';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { withRouter } from 'react-router-dom';
import * as dramaActions from 'modules/dramas/postdrama';
import MovieSection from 'components/MovieSection';
import ConvertImage from 'components/ConvertImage';
import * as scrollHelpers from 'common/scroll.helpers';
import Loader from 'components/Loader';
import { withSize } from 'react-sizeme'

class FilmsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            currentMovies: []
        };
        // Binds the handleScroll to this class (MovieBrowser)
        // which provides access to MovieBrowser's props
        // Note: You don't have to do this if you call a method
        // directly from a lifecycle method
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        const { DramaActions, } = this.props;

        window.onscroll = this.handleScroll;
        DramaActions.getPopularDrama(this.state.currentPage);

        // If search movie in searchBox, it will be redirect homepage
        if (this.props.data_loaded) {
            this.props.history.push('/');
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

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const { DramaActions, isLoading } = this.props;
        if (!isLoading) {
            let percentageScrolled = scrollHelpers.getPercentageScrolledDown(window);
            if (percentageScrolled > .8) {
                const nextPage = this.state.currentPage + 1; 
                if (nextPage < 10) {
                    DramaActions.getPopularDrama(nextPage);
                    this.setState({ currentPage: nextPage });
                }
            }
        }
    }

    render() {
        const { dramadatas, isLoading, size } = this.props;
        let dramaDataShow;

        // Calculate width for page center
        var width = size.width;
        const item_width = 296.47;
        var item_num = Math.floor((width) / item_width);
        var res_width = (item_width * item_num) + (6 * (item_num + 1));
        
        if (dramadatas) {
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
        }
        return (
            <div className="drama collections-container">
                <PageHeader name="Dramas" />    
                <div className="grid-wrapper" style={{width: res_width}}>
                    {dramaDataShow}
                </div>
                {isLoading && <Loader />}
            </div>
        );
    }
}

const enhance = compose(
    withRouter,
    withSize(),
    connect(
        (state) => ({
            dramadatas: state.dramas.data,
            isLoading: state.dramas.pending,
            data_loaded: state.search_movie.data_loaded
        }),
        (dispatch) => ({
            DramaActions: bindActionCreators(dramaActions, dispatch)
        })
    )
)

export default enhance(FilmsContainer);