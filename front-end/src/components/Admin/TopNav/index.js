import React from 'react';

import './index.scss'

const TopNav = props => {
    return (
        <nav className="site-header sticky-top py-1">
            <div className="container d-flex flex-column flex-md-row justify-content-between">
                <a className="py-2 d-none d-md-inline-block" href="#">Users</a>
            </div>
        </nav>
    )
}

export default TopNav;