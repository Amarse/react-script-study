import React from 'react';


interface Props { }

const PageTemplate: React.FC<Props> = ({ children }) => {
    return (
        <div className="page-template">
            <h1 className="page-template-title">TODO LIST</h1>
            <div className="page-template-text">{children}</div>
            <div></div>
        </div>
    );
};

export default PageTemplate;
