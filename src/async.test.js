const { withCallback, withPromise } = require('./async')

// https://mochajs.org/#asynchronous-code
describe('asynchronous testing', () => {
  it('calls back with true', (done) => {
    withCallback(result => {
      expect(result).to.equal(true)
      done()
    })
  })

  it('resolves with true', () => {
    return withPromise()
      .then(result => {
        expect(result).to.equal(true)
      })
  })

  // async / await with promises
  it('uses await to wait for resolution', async () => {
    const result = await withPromise()
    expect(result).to.equal(true)
  })
})
