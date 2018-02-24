import React from 'react'
import './index.scss'

const addEditUser = props => {
    const {
        closeBtnHandler
    } = props
    return (
        <div className="modal modal-add-edit-user" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-add-edit-user" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Create or update user</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeBtnHandler}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="user-name" className="form-control-label">User name</label>
                                <input type="text" className="form-control" id="user-name" onChange={props.onInputHandler({fieldName: 'name'})} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user-login" className="form-control-label">User login</label>
                                <input type="text" className="form-control" id="user-login" onChange={props.onInputHandler({fieldName: 'login'})} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user-avatar-uri" className="form-control-label">Avatar link</label>
                                <input type="text" className="form-control" id="user-avatar-uri" onChange={props.onInputHandler({fieldName: 'avatarUri'})} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user-location" className="form-control-label">User location</label>
                                <input type="text" className="form-control" id="user-location" onChange={props.onInputHandler({fieldName: 'location'})} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user-languages" className="form-control-label">User languages</label>
                                <input type="text" className="form-control" id="user-name" onChange={props.onInputHandler({fieldName: 'languages'})} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user-tags" className="form-control-label">User tags</label>
                                <input type="text" className="form-control" id="user-tags" onChange={props.onInputHandler({fieldName: 'tags'})} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user-rate" className="form-control-label">User rate</label>
                                <input type="text" className="form-control" id="user-rate" onChange={props.onInputHandler({fieldName: 'rate'})} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user-description" className="form-control-label">Description</label>
                                <textarea className="form-control" id="user-description" onChange={props.onInputHandler({fieldName: 'description'})}></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeBtnHandler}>Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default addEditUser;