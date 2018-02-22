import mongoose, { Schema } from 'mongoose'

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
    }
}, {
timestamps: true
})

export default mongoose.model('User', userSchema)