import React from 'react';
import { Link } from "react-router-dom";

import './index.scss'

const TopNav = props => {
    return (
        <nav className="site-header sticky-top py-1">
            <div className="container d-flex flex-column flex-md-row justify-content-between">
                <Link className="py-2 d-none d-md-inline-block" to="/admin/users">Users</Link>
            </div>
        </nav>
    )
}

export default TopNav;