const { withConsoleOutput } = require('./console')

describe('with console output', () => {
  it('returns true', () => {
    expect(withConsoleOutput()).to.equal(true)
  })
})
