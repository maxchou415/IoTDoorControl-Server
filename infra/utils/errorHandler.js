module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    console.log(error)
    if (!error.status) {
      ctx.status = 500
      ctx.body = {
        result: 'INTERNAL_SERVER_ERROR',
        data: {}
      }
      return
    }
    ctx.status = error.status || 500
    ctx.body = {
      result: error.message,
      data: {}
    }
    ctx.app.emit('error', error, ctx)
  }
}
