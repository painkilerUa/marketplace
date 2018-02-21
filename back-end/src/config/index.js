import constants from '../constants'

const env = process.env.NODE_ENV || constants.ENV.development
const cfg = require('./config.' + env)

module.exports = cfg