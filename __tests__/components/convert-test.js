jest.unmock('../../src/components/convert')

import Convert from '../../src/components/convert'

describe('#Convert', function () {
  it('should be equal 10', function () {
    let convert = new Convert()
    let result = convert.percent(10)
    expect(result).toBe(100)
  })
})
