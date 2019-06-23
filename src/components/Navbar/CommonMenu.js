import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import { Link } from 'react-router-dom';

const children1 = [
    <MenuItem key="/"><Link to="/">Home</Link></MenuItem>,
    <SubMenu title={<span className="submenu-title-wrapper" selected>TV Programmes</span>} key="2">
        <MenuItem key="/tv-programmes/dramas"><Link to="/tv-programmes/dramas">Dramas</Link></MenuItem>
        <MenuItem key="/tv-programmes/entertainment"><Link to="/tv-programmes/entertainment">Entertainment / Current affairs</Link></MenuItem>
        <MenuItem key="/tv-programmes/news"><Link to="/tv-programmes/news">News</Link></MenuItem>
    </SubMenu>,
    <MenuItem key="/films"><Link to="/films">Films</Link></MenuItem>,
    <MenuItem key="/originals"><Link to="/originals">Originals</Link></MenuItem>,
    <MenuItem key="/recently-added"><Link to="/recently-added">Recently Added</Link></MenuItem>,
];

class CommonMenu extends Component {
    state = {
        children: children1
    }
    render() {
        const { children } = this.state;
        const { handleClick, pathname } = this.props; console.log(pathname)
        return (
            <div>
                <Menu
                    onClick={handleClick}                    
                    selectedKeys={[pathname]}
                    mode={this.props.mode}
                    openAnimation={this.props.openAnimation}
                    defaultOpenKeys={this.props.defaultOpenKeys}
                >
                    {children}
                </Menu>
            </div>
        );
    }
}

CommonMenu.propTypes = {
    mode: PropTypes.string,
    openAnimation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    defaultOpenKeys: PropTypes.arrayOf(PropTypes.string),
};

export default CommonMenu;