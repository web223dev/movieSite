import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import * as searchActions from 'modules/home/searchmovie';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    handleChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    }
    handleKeyUp = (e) => {
        const { SearchActions } = this.props;
        const { searchTerm } = this.state;
        if (e.key === 'Enter' && this.state.searchTerm !== '') {
            SearchActions.getSearchedMovie(searchTerm);
        }
    }    
    render() {
        const { searchTerm } = this.state;
        const { handleChange, handleKeyUp } = this;
        return (
            <div id="menuinput-wrap">
                <div className="search_wrap">
                    <input id="search" name="search" onKeyUp={handleKeyUp} onChange={handleChange} value={searchTerm} type="text" placeholder="What're we looking for ?" />
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <FontAwesomeIcon icon={faBell} />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        data_loaded: state.search_movie.data_loaded
    }),
    (dispatch) => ({
        SearchActions: bindActionCreators(searchActions, dispatch)
    })
)(Input);