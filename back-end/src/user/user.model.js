import mongoose, { Schema } from 'mongoose'
import bluebird from 'bluebird'
import bcrypt from 'bcrypt'

const hash = bluebird.promisify(bcrypt.hash, { context: bcrypt })
const compare = bluebird.promisify(bcrypt.compare, { context: bcrypt })

const userSchema = new Schema({
    name: {
       type: String, 
    },
    avatarUri: {
        type: String,
    },
    location: {
      type: String,
    },
    languages: {
        type: Array,
    },
    tags: {
        type: Array,
    },
    rate: {
        type: String,
    },
    description: {
        type: String,
    },
    login: { type: String, required: true, unique: true },
    password:{
        type: String,
    }
}, {
timestamps: true
})

userSchema.methods.checkPassword = function (password) {
    return compare(password, this.password)
}

userSchema.statics.getHash = function (password) {
    return hash(password, 10)
}

export default mongoose.model('User', userSchema)