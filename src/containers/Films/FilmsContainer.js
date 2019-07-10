import React, { Component } from 'react';
import PageHeader from 'components/PageHeader';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { withRouter } from 'react-router-dom';
import * as postActions from 'modules/films/postmovie';
import * as scrollHelpers from 'common/scroll.helpers';
import MovieSection from 'components/MovieSection';
import ConvertImage from 'components/ConvertImage';
import Loader from 'components/Loader'
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
        const { PostActions } = this.props;

        window.onscroll = this.handleScroll;
        PostActions.getPopularMovie(this.state.currentPage);

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
        const { PostActions, isLoading } = this.props;
        if (!isLoading) {
            let percentageScrolled = scrollHelpers.getPercentageScrolledDown(window);
            if (percentageScrolled > .8) {
                const nextPage = this.state.currentPage + 1;
                if (nextPage < 10) {
                    PostActions.getPopularMovie(nextPage);
                    this.setState({ currentPage: nextPage });
                }
            }
        }
    }
    render() {
        const { moviedatas, isLoading, size } = this.props;
        let movieDataShow;

        // Calculate width for page center
        var width = size.width;
        const item_width = 296.47;
        var item_num = Math.floor((width) / item_width);
        var res_width = (item_width * item_num) + (6 * (item_num + 1));

        if (moviedatas) {
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
        }
        return (
            <div className="films collections-container">
                <PageHeader name="Films" />
                <div className="grid-wrapper" style={{ width: res_width }}>
                    {movieDataShow}
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
            moviedatas: state.films.data,
            isLoading: state.films.pending,
            data_loaded: state.search_movie.data_loaded
        }),
        (dispatch) => ({
            PostActions: bindActionCreators(postActions, dispatch)
        })
    )
)

export default enhance(FilmsContainer);