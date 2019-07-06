import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CommonMenu from './CommonMenu';
import Input from './Input';

class Menu extends Component {    
    render() {        
        const { pathname } = this.props.location;
        return (
            <div className="menu-content">
              <CommonMenu                 
                pathname={pathname}
              />  
              <Input />
            </div>
        );
    }
}

export default withRouter(Menu);





