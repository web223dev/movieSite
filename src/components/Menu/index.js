import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CommonMenu from './CommonMenu';
import Input from './Input';

class Menu extends Component {
    constructor(props) {
        super(props);
            this.toggle = this.toggle.bind(this);
            this.toggleDropdown = this.toggleDropdown.bind(this);
            this.state = {
                isOpen: false,
                dropdownOpen: false,
            };
        }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    toggleDropdown() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }   

    render() {
        const { dropdownOpen, isOpen } = this.state;
        const { toggleDropdown, toggle } = this
        const { pathname } = this.props.location;
        return (
            <div className="menu-content">
              <CommonMenu 
                toggle={toggle}
                dropdownOpen={dropdownOpen}
                toggleDropdown={toggleDropdown}
                isOpen={isOpen}
                pathname={pathname}
              />  
              <Input />            
            </div>
        );
    }
}

export default withRouter(Menu);





