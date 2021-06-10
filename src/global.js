const getValue = () => true

const otherFunc = () => {
  return getValue()
}

module.exports = {
  getValue,
  otherFunc
}