# curlyq [![Actions Status](https://github.com/rafaelrinaldi/curlyq/workflows/ci/badge.svg)](https://github.com/rafaelrinaldi/curlyq/actions)

>Convert straight quotes to smart quotes

## Install

```sh
npm i curlyq
```

## Usage

### CLI

```sh
$ curlyq

Usage: curlyq [-] [STRING] [FILE]

  Convert straight quotes to smart quotes

Example:
  $ curlyq \""That's a 'magic' shoe.\""
  “That’s a ‘magic’ shoe.”

Via stdin:
  $ echo \""That's a 'magic' shoe.\"" | curlyq
  “That’s a ‘magic’ shoe.”

Via file:
  $ echo \""That's a 'magic' shoe.\"" > file.txt
  $ curlyq file.txt
  “That’s a ‘magic’ shoe.”

Options:
  -v --version              Display current program version
  -h --help                 Display help and usage details

```

### Node.js

```ts
const { curlyq } = require('curlyq')
curlyq(`"That's a 'magic shoe."`) //=> “That’s a ‘magic’ shoe.”
```

### React Component

You must include React as a dependency first:

```sh
npm i react -S
```

```tsx
import React, { FunctionComponent } from 'react'
import { CurlyQ } from 'curlyq'

export const App: FunctionComponent = () => (
  <CurlyQ>
    "That's a 'magic' shoe."
    <div>
      also
      <div>
        works
        <div>
          with
          <div style={{ background: 'gold' }}>
            "deeply" nested nodes
          </div>
        </div>
      </div>
    </div>
  </CurlyQ>
)
```

## License

MIT © [Rafael Rinaldi](https://rinaldi.io)
