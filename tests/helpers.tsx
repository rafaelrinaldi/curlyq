import React from 'react'
import { render } from '@testing-library/react'
import { recursivelyWalkChildren } from '../src/helpers'

describe('recursivelyWalkChildren', () => {
  test('should recursively walk children', () => {
    const component = (
      <div>
        Foo
        <div>
          Bar
          <div>Baz</div>
        </div>
      </div>
    )

    const fn = jest.fn()

    const { container } = render(component)

    expect(container).toBeInTheDocument()

    recursivelyWalkChildren(component, fn)

    expect(fn).toHaveBeenCalledTimes(3)
    expect(fn).toHaveBeenNthCalledWith(1, 'Foo')
    expect(fn).toHaveBeenNthCalledWith(2, 'Bar')
    expect(fn).toHaveBeenNthCalledWith(3, 'Baz')
  })
})
