const { useInterval } = require('./cleanup')

describe('testing with intervals', () => {
  beforeEach(() => {
    useInterval()
  })

  it('can finish', () => {
    expect(true).to.equal(true)
  })
})
