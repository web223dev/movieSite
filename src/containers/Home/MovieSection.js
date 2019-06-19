import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Slider from "react-slick";

class MovieSection extends Component {    
    render() {
        const { moviedatas, loading } = this.props; //console.log(moviedatas, loading);
        return (
            <div>
                {}
            </div>
        );
    }
}

export default connect(
    (state) => ({
        moviedatas: state.getmovie.data,
        loading: state.getmovie.pending
    })
)(MovieSection);