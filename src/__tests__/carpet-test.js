const carpet = require('../carpet.js')

test(`The carpet log function`, () => {
  const spy = jest.spyOn(console, 'log')
  const result = carpet.log(10000, 10)

  expect(console.log).toHaveBeenCalled()
})