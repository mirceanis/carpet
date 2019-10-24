const carpet = require('../carpet.js')

test('The carpet log function', () => {
  const spy = jest.spyOn(console, 'log')
  carpet.log('hello', 'world')

  expect(spy).toHaveBeenCalled()
})
