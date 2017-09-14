'use strict'

const axios = require('axios')

module.exports = async url => {
  try {
    const response = await axios(url)
    return response.data
  } catch (error) {
    throw error
  }
}
