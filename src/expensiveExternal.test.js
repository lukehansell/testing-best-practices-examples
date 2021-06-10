const { fetchExternal } = require('./expensiveExternal')

describe('with external dependencies', () => {
  it('should not actually call an external service in a unit test', async () => {
    const result = await fetchExternal()
    expect(result.status).to.equal(200)
  })
})