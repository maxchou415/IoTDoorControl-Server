const config = require('config')
const mongoose = require('mongoose')

mongoose.connect(`mongodb://${config.get('database.url')}:${config.get('database.port')}/${config.get('database.name')}`, { useNewUrlParser: true })

const Schema = mongoose.Schema

const userSchema = new Schema({
  id: {
    type: String
  },
  userId: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  role: {
    type: Number,
    default: 1
  },
  isDeleted: {
    type: Number,
    default: 0
  },
  isActivated: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date
  }
})

module.exports = mongoose.model('user', userSchema)
