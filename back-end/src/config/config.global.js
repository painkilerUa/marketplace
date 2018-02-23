import constants from '../constants'

const config = {}

// env
config.env = constants.ENV.development
config.host = 'http://localhost'
config.port = 3001

// jwt
config.jwt = {}
config.jwt.secret = 'Bse76tJcZD2QBTxA7FD27kix6LEYmAW5BabRDxDYOpowiGBOsxn7EqmmEoITXMv'

// database
config.mongo = {}
config.mongo.uri = process.env.MONGO_URI || 'localhost'
config.mongo.db = 'marketplace'
config.mongo.connectionStr = `mongodb://${config.mongo.uri}/${config.mongo.db}`

export default config