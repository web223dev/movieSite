import React, { Component } from 'react';
import PageHeader from 'components/PageHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from 'modules/getmovie/post';

class FilmsContainer extends Component {
    componentDidMount(){
        const { PostActions } = this.props;
        PostActions.getMovie();
    }
    render() {
        const { moviedatas } = this.props; console.log(moviedatas.toJS());
        return (
            <div className="collections-container">
                <PageHeader name="Films" />
            </div>
        );
    }
}

export default connect(
    (state) =>({
        moviedatas: state.getmovie.get('data')
    }),
    (dispatch) => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(FilmsContainer);