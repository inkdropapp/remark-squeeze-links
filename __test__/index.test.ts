import { remark } from 'remark'
import { u } from 'unist-builder'
import { squeezeLinks } from '../src'

test('remark-squeeze-links', () => {
  const result = remark()
    .use(squeezeLinks)
    .runSync(
      u('root', [
        u('link', { url: '#about' }, [u('text', 'About')]),
        u('link', { url: '#about' }, [u('text', ' ')]),
        u('link', { url: '#about' }, [])
      ])
    )
  expect(result).toStrictEqual(
    u('root', [u('link', { url: '#about' }, [u('text', 'About')])])
  )
})
