import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class Input extends Component {
  state = {
    query: '',
    containerWidth: '10%',
    containerBorderColor: 'transparent',
    inputOpacity: 0,
    inputFocus: false,
    cursor: 'pointer'
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.closeInputHandler();
      this.props.onCollapseInputHandler();
    }
  }

  openInputHandler = () => {
    this.setState({
      containerWidth: '85%',
      containerBorderColor: '#fff',
      inputFocus: true,
      inputOpacity: 1,
      cursor: 'default'
    });

    this.props.onExpandInputHandler();
  }

  closeInputHandler = () => this.setState({
    containerWidth: '10%',
    containerBorderColor: 'transparent',
    inputFocus: false,
    inputOpacity: 0,
    cursor: 'pointer'
  });

  resetQueryHandler = () => this.setState({ query: '' });

  onChangeHandler = event => this.setState({ query: event.target.value });

//   onKeyPressHandler = event => {
//     if (event.key === 'Enter' && this.state.query) {
//       this.props.onEnterPressed(this.state.query)
//     }
//   }

  render() {
    return (
      <div className="navbar-input-space">
        <div
          className="navbar-input-container"
          style={{
            width: this.state.containerWidth,
            borderColor: this.state.containerBorderColor
          }}
          ref={node => this.wrapperRef = node}
        >
          <div className="navbar-input">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              placeholder={this.props.placeholder}
              value={this.state.query}
            //   onKeyPress={this.onKeyPressHandler}
              onChange={this.onChangeHandler}
              style={{ opacity: this.state.inputOpacity}}
              ref={input => input && window.requestAnimationFrame(() => input.focus())}
            />
            <div className="navbar-input-reset-query">
                <FontAwesomeIcon 
                    icon={faSearch} 
                    aria-hidden="true"
                    onClick={this.resetQueryHandler}
                    style={{
                    visibility: this.state.query.length && this.state.inputOpacity ? 'visible' : 'hidden',
                    cursor: 'pointer'
                    }}
                />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Input;
