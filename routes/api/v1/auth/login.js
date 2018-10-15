const helper = require('../../../../infra/helpers/index')
const {
  user: User
} = require('../../../../infra/schema/index')

module.exports = async (ctx, next) => {
  const {
    email,
    password
  } = ctx.request.body

  const passwordhashed = helper.password.hash(password)

  try {
    var data
    data = await User.findOne({
      email,
      password: passwordhashed
    })
  } catch (error) {
    ctx.throw(400, 'AUTH_FAILED')
    return
  }

  if (!data || data.length <= 0) {
    ctx.throw(400, 'AUTH_FAILED')
    return
  }

  const token = helper.token.new(data.userId)

  ctx.status = 200
  ctx.body = {
    result: 'success',
    data: token
  }
}
