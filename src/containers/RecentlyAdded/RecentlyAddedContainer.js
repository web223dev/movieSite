import React, { Component } from 'react';
import PageHeader from 'components/PageHeader';

class RecentlyAddedContainer extends Component {
    render() {
        return (
            <div className="collections-container">
              <PageHeader name="Recently Added" />  
            </div>
        );
    }
}

export default RecentlyAddedContainer;