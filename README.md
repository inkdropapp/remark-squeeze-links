# remark-squeeze-links

[**remark**][remark] plugin to remove empty (or whitespace only) links.

## Install

[npm][]:

```sh
npm install remark-squeeze-links
```

## Use

```js
import { remark } from 'remark'
import { squeezeLinks } from 'remark-squeeze-links'

remark().use(squeezeLinks).processSync('[](#about)\ntext').toString()
// => "text\n"
```

## API

### `remark().use(squeezeLinks)`

Remove empty (or white-space only) links.

## Related

- [`mdast-squeeze-links`][mdast-squeeze-links]
  — [**mdast**][mdast] utility that is in the core of this plugin

## Contribute

See [`contributing.md`][contributing] in [`remarkjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Takuya Matsuyama][author]

[npm]: https://docs.npmjs.com/cli/install
[health]: https://github.com/remarkjs/.github
[contributing]: https://github.com/remarkjs/.github/blob/HEAD/contributing.md
[support]: https://github.com/remarkjs/.github/blob/HEAD/support.md
[coc]: https://github.com/remarkjs/.github/blob/HEAD/code-of-conduct.md
[license]: LICENSE
[author]: https://www.craftz.dog/
[remark]: https://github.com/remarkjs/remark
[mdast]: https://github.com/syntax-tree/mdast
[mdast-squeeze-links]: https://github.com/syntax-tree/mdast-squeeze-links
[hast]: https://github.com/syntax-tree/hast
