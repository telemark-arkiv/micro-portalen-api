const jwt = require('jsonwebtoken')
const { tokenOptions, jwtSecret } = require('../config')

module.exports = payload => {
  if (!payload) {
    throw Error('Missing required input: payload')
  }

  const data = {
    system: 'portalen-api',
    ...payload
  }
  const token = jwt.sign(data, jwtSecret, tokenOptions)
  return token
}
