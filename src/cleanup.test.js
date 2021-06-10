const { useInterval } = require('./cleanup')

describe('testing with intervals', () => {
  let interval
  beforeEach(() => {
    interval = useInterval()
  })

  afterEach(() => {
    clearInterval(interval)
  })

  it('can finish', () => {
    expect(true).to.equal(true)
  })
})
