import React, { Component } from 'react';
import { withSize } from 'react-sizeme'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class CommonMenu extends Component {
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
            isOpen: !this.state.isOpen,
            dropdownOpen: true
        });
    }
    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        const { pathname } = this.props;
        const { isOpen, dropdownOpen } = this.state;
        const { toggleDropdown, toggle } = this;
        return (
            <Navbar light expand="lg">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/#/" onClick={toggle} style={{ borderColor: pathname === '/' && 'rgb(184, 19, 13)' }}>Home</NavLink>
                        </NavItem>

                        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} nav inNavbar>
                            <DropdownToggle
                                style={{ borderColor: (pathname === '/tv-programmes/dramas' || pathname === "/tv-programmes/entertainment" || pathname === "/tv-programmes/news") && 'rgb(184, 19, 13)' }} nav caret>
                                TV Programmes
                            </DropdownToggle>
                            <DropdownMenu left="true">
                                <div className="triangle"></div>
                                <DropdownItem>
                                    <NavLink onClick={toggle} href="/#/tv-programmes/dramas">Dramas</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink onClick={toggle} href="/#/tv-programmes/entertainment">Entertainment / Current affairs</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink onClick={toggle} href="/#/tv-programmes/news">News</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <NavItem>
                            <NavLink href="/#/films" onClick={toggle} style={{ borderColor: pathname === '/films' && 'rgb(184, 19, 13)' }}>Films</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#/originals" onClick={toggle} style={{ borderColor: pathname === '/originals' && 'rgb(184, 19, 13)' }}>Originals</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#/recently-added" onClick={toggle} style={{ borderColor: pathname === '/recently-added' && 'rgb(184, 19, 13)' }}>Recently Added</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default withSize()(CommonMenu);