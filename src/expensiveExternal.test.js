const sinon = require('sinon')
const fetch = require('node-fetch')

const { fetchExternal } = require('./expensiveExternal')

beforeEach(() => {
  sinon.stub(fetch, 'Promise').resolves({ status: 200 })
})

afterEach(sinon.restore)

describe('with external dependencies', () => {
  it('should not actually call an external service in a unit test', async () => {
    const result = await fetchExternal()
    expect(result.status).to.equal(200)
  })
})