const config = require('../config')
const getData = require('../lib/get-data')
const { parse } = require('url')
const logger = require('../lib/logger')

module.exports = async (req, res) => {
  const { query } = await parse(req.url, true)

  const url = query.company ? `${config.url.roles}/roles?company=${query.company}` : `${config.url.roles}/roles`
  logger('info', ['roles', url])
  try {
    const data = await getData(url)
    return data
  } catch (e) {
    throw e
  }
}
