import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as postActions from 'modules/moviedetail/post';

class MovieDetailContainer extends Component {
    componentDidMount() {
        const { PostActions } = this.props;
        const id = this.props.location.pathname.substring(7);
        PostActions.getMovieDetail(id);
    }
    render() {
        const { moviedatas } = this.props;
        console.log(moviedatas);
        return (
            <div>
                MovieDetailContainer
            </div>
        );
    }
}

export default connect(
    (state) => ({
        moviedatas: state.moviedetail.data
    }),
    (dispatch) => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(withRouter(MovieDetailContainer));