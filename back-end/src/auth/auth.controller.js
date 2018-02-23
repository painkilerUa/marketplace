import _ from 'lodash'

import Response from '../response'
import User from '../user/user.model'
import jwt from 'jsonwebtoken'
import config from '../config'

class AuthController extends Response {
    getToken (user) {
        const signedUser = _.pick(user.toJSON(), '_id', 'name', 'location', 'languages', 'tags', 'rate', 'login')
    
        return jwt.sign(signedUser, config.jwt.secret)
    }
    async login ({ body: { login, password } }) {
        // User.getHash(password).then(res => console.log('res', res))
        const user = await User.findOne({ login: login })

        if (!user) throw new Error('user not found')

        const isPasswordCorrect = await user.checkPassword(password)

        if (!isPasswordCorrect) throw new Error('invalid credentials')
    
        const token = this.getToken(user)
    
        return { token }
    }
}

export default new AuthController();