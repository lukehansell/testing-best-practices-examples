const sinon = require('sinon')
const lib = require('./global')

describe('contrived example', () => {
  let contrivedExampleFunc
  beforeEach(() => {
    sinon.stub(lib, 'getValue').returns(false)
    contrivedExampleFunc = () => lib.getValue()
  })

  afterEach(sinon.restore)

  it('returns the value from getValue', () => {
    expect(contrivedExampleFunc()).to.equal(false)
  })
})

describe('getValue', () => {
  it('should return true', () => {
    expect(lib.getValue()).to.equal(true)
  })
})