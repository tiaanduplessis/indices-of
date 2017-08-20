'use strict'

const indicesOf = (arr = [], x) =>
  arr.reduce((prev, cur, index) => (cur === x ? prev.concat(index) : prev), [])

module.exports = indicesOf
