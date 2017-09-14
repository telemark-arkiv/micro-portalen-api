const jwtAuth = require('micro-jwt-auth')
const config = require('../config')
const logger = require('../lib/logger')

module.exports = jwtAuth(config.jwtSecret)(async (req, res) => {
  const who = req.params.who
  logger('info', ['hello', who])
  return { hello: who }
})
