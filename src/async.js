const withCallback = (callback) => {
  setTimeout(() => callback(false), 1000)
}

const withPromise = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(false), 1000)
  })
}

module.exports = {
  withCallback,
  withPromise
}
