import React, { Component } from 'react';
import { withSize } from 'react-sizeme'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class CommonMenu extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.state = {
            isOpen: false,
            dropdownOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
            dropdownOpen: true
        });
    }
    hideMenu(){
        this.setState({
            isOpen: false
        })
    }
    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        const { pathname } = this.props;
        const { isOpen, dropdownOpen } = this.state;
        const { toggleDropdown, toggle, hideMenu } = this;
        return (
            <Navbar light expand="lg">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/#/" onClick={hideMenu} style={{ borderColor: pathname === '/' && 'rgb(184, 19, 13)' }}>Home</NavLink>
                        </NavItem>

                        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} nav inNavbar>
                            <DropdownToggle
                                style={{ borderColor: (pathname === '/tv-programmes/dramas' || pathname === "/tv-programmes/entertainment" || pathname === "/tv-programmes/news") && 'rgb(184, 19, 13)' }} nav caret>
                                TV Programmes
                            </DropdownToggle>
                            <DropdownMenu left="true">
                                <div className="triangle"></div>
                                <DropdownItem>
                                    <NavLink onClick={hideMenu} href="/#/tv-programmes/dramas">Dramas</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink onClick={hideMenu} href="/#/tv-programmes/entertainment">Entertainment / Current affairs</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink onClick={hideMenu} href="/#/tv-programmes/news">News</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <NavItem>
                            <NavLink href="/#/films" onClick={hideMenu} style={{ borderColor: pathname === '/films' && 'rgb(184, 19, 13)' }}>Films</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#/originals" onClick={hideMenu} style={{ borderColor: pathname === '/originals' && 'rgb(184, 19, 13)' }}>Originals</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#/recently-added" onClick={hideMenu} style={{ borderColor: pathname === '/recently-added' && 'rgb(184, 19, 13)' }}>Recently Added</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default withSize()(CommonMenu);