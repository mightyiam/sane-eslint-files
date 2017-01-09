const { deepStrictEqual } = require('assert')

const actual = require('.')

const expected = [
  '**/*.js',
  '**/*.jsx'
]

deepStrictEqual(actual, expected)
