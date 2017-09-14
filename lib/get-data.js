const fetch = require('isomorphic-fetch')

module.exports = async url => {
  try {
    // eslint-disable-next-line no-undef
    const res = await fetch(url)
    const json = await res.json()
    return json
  } catch (e) {
    throw e
  }
}
