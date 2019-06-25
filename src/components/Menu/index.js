import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
            this.toggle = this.toggle.bind(this);
            this.toggleDropdown = this.toggleDropdown.bind(this);
            this.state = {
                isOpen: false,
                dropdownOpen: false
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
        const { dropdownOpen } = this.state;
        const { toggleDropdown, toggle } = this
        return (
            <div className="menu-content-header">
              <Navbar color="light" light expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink href="/">Home</NavLink>
                    </NavItem>
                    
                    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} nav inNavbar>
                      <DropdownToggle onMouseOver={toggleDropdown} nav caret>
                        TV Programmes
                      </DropdownToggle>
                      <DropdownMenu left="true">
                        <DropdownItem>
                          <NavLink href="/tv-programmes/dramas">Dramas</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                          <NavLink href="/tv-programmes/entertainment">Entertainment / Current affairs</NavLink>
                        </DropdownItem>                        
                        <DropdownItem>
                          <NavLink href="/tv-programmes/news">News</NavLink>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                      <NavLink href="/films">Films</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/originals">Originals</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/recently-added">Recently Added</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
        );
    }
}

export default Menu;





