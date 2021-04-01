'use strict'

var test = require('tape')
var remark = require('remark')
var u = require('unist-builder')
var squeezeLinks = require('.')

test('remark-squeeze-links', function (t) {
  t.deepEqual(
    remark()
      .use(squeezeLinks)
      .runSync(
        u('root', [
          u('link', {url: '#about'}, [u('text', 'About')]),
          u('link', {url: '#about'}, [u('text', ' ')]),
          u('link', {url: '#about'}, [])
        ])
      ),
    u('root', [u('link', {url: '#about'}, [u('text', 'About')])])
  )

  t.end()
})
