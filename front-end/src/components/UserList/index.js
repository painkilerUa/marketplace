import React, { Fragment } from 'react';

import './index.scss'

const UserList = props => {
    
    const list = props.users.map(user => {
        const shortDesc = user.description.split(' ').slice(0, 25).join(' ') + '...';
        return (
        <section key={user._id} className="px-4 py-4 user-list-item" >
            <div className="row">
                    <div className="col-lg-1">
                        <img src={user.avatarUri} className="avatar" alt="avatar-log" />
                    </div>
                    <div className="col-lg-11">
                        <span className="font-weight-bold">{user.name}</span>
                    </div>
            </div>
            <div className="row">
                    <div className="col-lg-1">

                    </div>
                    <div className="col-lg-2">
                        <span>${user.rate}.00 / hr</span>
                    </div>
                    <div className="col-lg-1">
                    </div>
                    <div className="col-lg-2">
                        $0 earned
                    </div>
                    <div className="col-lg-2">
                    </div>
                    <div className="col-lg-2">
                    </div>
                    <div className="col-lg-2">
                        <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                        <span>{user.location}</span>
                    </div>
            </div>
            <div className="row">
                    <div className="col-lg-1">

                    </div>
                    <div className="col-lg-11">
                        <p>{shortDesc}</p>
                    </div>
            </div>
        </section>
    )})
    return (
        <Fragment>
            {list}
        </Fragment>
    )
}

export default UserList;