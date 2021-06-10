const { withConsoleOutput } = require('./console')
const sinon = require('sinon')

beforeEach(() => {
  sinon.stub(console, 'log')
})

afterEach(sinon.restore)

describe('with console output', () => {
  it('returns true', () => {
    expect(withConsoleOutput()).to.equal(true)
  })

  it('logs out the data', () => {
    withConsoleOutput()
    expect(console.log).to.have.been.calledWith('some data received')
  })
})
