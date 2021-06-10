const fetch = require('node-fetch')
const sinon = require('sinon')

const fetchExternal = async () => {
  return fetch('https://bit.ly/3xc1vzb')
}

module.exports = {
  fetchExternal
}
