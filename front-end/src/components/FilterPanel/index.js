import React from 'react';

const filterPanel = props => {
    return (
        <div className="row search-block ">
            <div className="col-xl-8 px-5 py-5">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for freelancers" />
                    <div className="input-group-append">
                        <span className="input-group-text">
                            Search
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default filterPanel;