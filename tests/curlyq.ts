import { curlyq } from '../src'

describe('curlyq', () => {
  test('should work given valid input', () => {
    const input: string = `Foo 'Bar' "Baz"`
    const output: string = 'Foo ‘Bar’ “Baz”'

    expect(curlyq(input)).toEqual(output)
  })
})
