const noop = () => { }

const useInterval = () => {
  return setInterval(noop, 1000 * 30)
}

module.exports = {
  useInterval
}
