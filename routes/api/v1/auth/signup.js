const uniqid = require('uniqid')
const helper = require('../../../../infra/helpers/index')
const {
  user: User
} = require('../../../../infra/schema/index')

module.exports = async (ctx, next) => {
  const wantedData = ctx.request.body

  // email and studentNumber are unique
  const data = {
    userId: uniqid('user-'),
    name: String(wantedData.name),
    email: String(wantedData.email),
    password: helper.password.hash(String(wantedData.password)),
    createdAt: new Date().toISOString()
  }

  let userData
  try {
    userData = await new User(data).save()
  } catch (error) {
    ctx.throw(400, 'ADD_USER_FAILED')
    return
  }

  const token = helper.token.new(userData.userId)

  ctx.status = 200
  ctx.body = {
    result: 'success',
    data: token
  }
}
