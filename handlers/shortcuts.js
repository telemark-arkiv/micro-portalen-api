const config = require('../config')
const getData = require('../lib/get-data')
const { parse } = require('url')
const logger = require('../lib/logger')

module.exports = async (req, res) => {
  const { query } = await parse(req.url, true)
  const roles = query.roles.split(',').join('|')
  const myIp = query.ip ? `&myIp=${query.ip}` : ''
  const url = `${config.url.shortcuts}/shortcuts?roles=${roles}${myIp}`
  logger('info', ['shortcuts', url])
  try {
    const data = await getData(url)
    return data
  } catch (e) {
    throw e
  }
}
