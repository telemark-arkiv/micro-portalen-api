'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const logger = require('../lib/logger')

module.exports = (request, response) => {
  logger('info', ['handlers', 'frontpage'])
  const readme = readFileSync('README.md', 'utf-8')
  return marked(readme)
}
