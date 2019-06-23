import React from 'react';

const PageHeader = ({name, children}) => {
    return (
        <div className="pg-collections-header">
            <h1 className="pg-collections-header-name">{name}</h1>
            {children}
        </div>
    );
};

export default PageHeader;