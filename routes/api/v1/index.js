const router = require('koa-router')()
const {
  auth
} = require('./utils/middlewares')

router.prefix('/api/v1')

// Auth
router.post('/auth/login', require('./auth').login)
router.post('/auth/signup', require('./auth').signup)

// Control
router.post('/control/action', auth.required, auth.role(2), require('./control').action)

module.exports = router
