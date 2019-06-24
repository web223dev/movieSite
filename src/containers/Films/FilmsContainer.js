import React, { Component } from 'react';
import PageHeader from 'components/PageHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from 'modules/films/postmovie';

class FilmsContainer extends Component {
    componentDidMount(){
        const { PostActions } = this.props;
        PostActions.getPopularMovie();
    }
    render() {
        const { moviedatas } = this.props; console.log("Fm", moviedatas);
        return (
            <div className="collections-container">
                <PageHeader name="Films" />
            </div>
        );
    }
}

export default connect(
    (state) =>({
        moviedatas: state.films.data
    }),
    (dispatch) => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(FilmsContainer);