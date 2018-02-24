import React from 'react';
import './index.scss';

const ModalLogin = props => {
    return (
        <div className="modal modal-login" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Login</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="login" className="form-control-label">Login:</label>
                            <input
                                type="text"
                                id="login"
                                className="form-control"
                                value={props.login}
                                onChange={props.onInputHandler({fieldName: 'login'})}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-control-label">Password:</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                value={props.password}
                                onChange={props.onInputHandler({fieldName: 'password'})}
                            />
                        </div>
                    </form>
                </div>
                <div className="modal-footer justify-content-between">
                    <span>
                        {
                            props.loading ? (
                            'Loading...'
                            ) : null
                        }
                        {
                            props.hasError ? (
                                'Invalid user password or login'
                            ) : null
                        }
                    </span>
                    <button
                        type="button"
                        className="btn btn-primary login-btn"
                        onClick={props.loginHandler}
                    >Login</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ModalLogin;