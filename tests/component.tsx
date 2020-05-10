import React from 'react'
import { render } from '@testing-library/react'
import { CurlyQ } from '../src'

describe('CurlyQ', () => {
  test('should work given valid input', () => {
    const component = (
      <CurlyQ>
        <h1>Foo 'Bar' "Baz"</h1>
      </CurlyQ>
    )

    const { container } = render(component)

    expect(container).toBeInTheDocument()
    expect(container.firstChild).toMatchInlineSnapshot(`
      <h1>
        Foo ‘Bar’ “Baz”
      </h1>
    `)
  })

  test('should work on nested children', () => {
    const component = (
      <CurlyQ>
        <div>
          Foo
          <div>
            'Bar'
            <div>"Baz"</div>
          </div>
        </div>
      </CurlyQ>
    )

    const { container } = render(component)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        Foo
        <div>
          ‘Bar’
          <div>
            “Baz”
          </div>
        </div>
      </div>
    `)
  })
})
