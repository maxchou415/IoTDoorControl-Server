const { user: User } = require('../../../../../../infra/schema')
const helper = require('../../../../../../infra/helpers')

module.exports = async (ctx, next) => {
  let token = ctx.header.authorization

  let tokenData
  try {
    tokenData = helper.token.data(token)
  } catch (error) {
    ctx.throw(400, 'AUTH_FAILED')
    return
  }

  let userData
  try {
    userData = await User.findOne({ userId: tokenData.data.userId })
  } catch (error) {
    ctx.throw(400, 'AUTH_FAILED')
    return
  }

  if (!userData) {
    ctx.throw(400, 'AUTH_FAILED')
    return
  }

  ctx.me = userData

  await next()
}
