import constants from '../constants'

const config = {}

// env
config.env = constants.ENV.development
config.host = 'http://localhost'
config.port = 3001

// database
config.mongo = {}
config.mongo.uri = process.env.MONGO_URI || 'localhost'
config.mongo.db = 'marketplace'
config.mongo.connectionStr = `mongodb://${config.mongo.uri}/${config.mongo.db}`

export default config