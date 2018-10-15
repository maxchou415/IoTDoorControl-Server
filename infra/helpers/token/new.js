const jwt = require('jsonwebtoken')

const secret = process.env.tokenSecret

module.exports = (userId) => {
  let token = jwt.sign({
    data: {
      userId
    }
  }, secret, {
    algorithm: 'HS512',
    expiresIn: '7d'
  })
  return token
}
