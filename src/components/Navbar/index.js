import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CommonMenu from './CommonMenu';
import Input from './Input';

class Navbar extends Component {
    state = {
        isInputClosed: true
    }
    handleClick = (info) => {
        console.log(`clicked ${info.key}`);
        // console.log(info);
    }
    render() {
        const { handleClick } = this;
        const { pathname } = this.props.location;
        return (
            <div>
                <CommonMenu
                    handleClick={handleClick}
                    mode="horizontal"
                    openAnimation="slide-up"
                    pathname={pathname}
                />
                {/* <Input
                    placeholder="Filmes, pessoas..."
                    onEnterPressed={query => this.props.onSearchMovies(query)}
                    onCollapseInputHandler={() => this.setState({ isInputClosed: true })}
                    onExpandInputHandler={() => this.setState({ isInputClosed: true })}
                /> */}
            </div>
        );
    }
}

export default withRouter(Navbar);





