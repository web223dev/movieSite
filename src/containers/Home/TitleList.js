import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from 'modules/getmovie/post';
import MovieSection from './MovieSection';

class TitleList extends Component {

    // componentWillReceiveProps(nextProps) {
    //     const { url, PostActions } = this.props;
    //     if (nextProps.url !== url && nextProps.url !== '') {
    //         PostActions.getMovie(url);
    //     }
    // }
    componentDidMount() {
        const { url, PostActions } = this.props;
        if (url !== '') {
            PostActions.getMovie(url);
        }
    }
    render() {
        const { moviedatas, title, url, loading, error } = this.props; console.log(url, moviedatas);
        // console.log(this.props.moviedata.toJS());
        return (
            <div>
                <h1>{title}</h1>
                <div>{moviedatas.total_pages}</div>
                {/* {loading && <h2>Loading...</h2>} */}
                {
                    // error
                    // ? <h1>Careful!! Error!!!</h1>
                    // : (
                    // moviedatas.map(mdata => {
                    //     const { id, data } = mdata.toJS(); 
                    //     return (
                    //         <MovieSection
                    //             key={id}
                    //             movieDetail={data}                                    
                    //         />
                    //     )
                    // })
                    // )
                }
            </div>
        );
    }
}

export default connect(
    (state) => ({
        moviedatas: state.getmovie.get('data'),
        // loading: state.getmovie.get('pending'),
        // error: state.getmovie.get('error')
    }),
    (dispatch) => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(TitleList);