import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { withRouter } from 'react-router-dom';
import * as postActions from 'modules/moviedetail/post';

class MovieDetailContainer extends Component {
    // componentDidMount() {
    //     const { PostActions } = this.props;
    //     PostActions.getMovieDetail();
    // }
    render() {
        console.log(this.props);
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
// )(withRouter(MovieDetailContainer));
)(MovieDetailContainer);