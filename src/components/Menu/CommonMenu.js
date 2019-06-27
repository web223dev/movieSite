import React, { Component } from 'react';

import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class CommonMenu extends Component {
    render() {
        const { toggleDropdown, toggle, dropdownOpen, isOpen, pathname } = this.props;
        return (
            <Navbar light expand="lg">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/" style={{ borderColor: pathname === '/' && 'rgb(184, 19, 13)' }}>Home</NavLink>
                        </NavItem>

                        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} nav inNavbar>
                            <DropdownToggle
                                onMouseOver={toggleDropdown}
                                style={{ borderColor: (pathname === '/tv-programmes/dramas' || pathname === "/tv-programmes/entertainment" || pathname === "/tv-programmes/news") && 'rgb(184, 19, 13)' }} nav caret>
                                TV Programmes
                            </DropdownToggle>
                            <DropdownMenu left="true">
                                <div className="triangle"></div>
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
                            <NavLink href="/films" style={{ borderColor: pathname === '/films' && 'rgb(184, 19, 13)' }}>Films</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/originals" style={{ borderColor: pathname === '/originals' && 'rgb(184, 19, 13)' }}>Originals</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/recently-added" style={{ borderColor: pathname === '/recently-added' && 'rgb(184, 19, 13)' }}>Recently Added</NavLink>
                        </NavItem>
                    </Nav>                    
                </Collapse>
            </Navbar>
        );
    }
}

export default CommonMenu;