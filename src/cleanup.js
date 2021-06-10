const noop = () => { }

const useInterval = () => {
  setInterval(noop, 1000 * 30)
}

module.exports = {
  useInterval
}
