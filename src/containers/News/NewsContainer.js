import React, { Component } from 'react';
import PageHeader from 'components/PageHeader';

class NewsContainer extends Component {
    render() {
        return (
            <div className="collections-container">
                <PageHeader name="News" />
            </div>
        );
    }
}

export default NewsContainer;