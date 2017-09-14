const { name, version } = require('../package.json')

module.exports = (req, res) => {
  return {
    name: name,
    version: version,
    uptime: process.uptime()
  }
}
