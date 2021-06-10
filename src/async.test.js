const { withCallback, withPromise } = require('./async')

// https://mochajs.org/#asynchronous-code
describe('asynchronous testing', () => {
  it('calls back with true', () => {
    withCallback(result => {
      expect(result).to.equal(true)
    })
  })

  it('resolves with true', () => {
    withPromise()
      .then(result => {
        expect(result).to.equal(true)
      })
  })

  // async / await with promises
  it('uses await to wait for resolution', () => {
    withPromise()
      .then(result => {
        expect(result).to.equal(true)
      })
  })
})
