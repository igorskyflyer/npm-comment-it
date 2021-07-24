const { CommonFormatter } = require('./formatters/commonFormatters')
const cStyleCommentFormatter = require('./formatters/cStyleCommentFormatter')
const jsxCommentFormatter = require('./formatters/jsxCommentFormatter')
const xmlCommentFormatter = require('./formatters/xmlCommentFormatter')

/**
 * @callback CommentTransform
 * @param {string} value
 * @returns {string}
 */

/**
 * @typedef SingleCommentFormatter
 * @property {CommentTransform} single
 */

/**
 * @typedef CommentFormatter
 * @property {CommentTransform} single
 * @property {CommentTransform} multi
 */

const comment = {
  /**
   * @type {CommentFormatter}
   */
  batch: {
    single: (value) => `REM ${value}`,
    multi: (value) => `:: ${value} ::`,
  },
  /**
   * @type {CommentFormatter}
   */
  coffeeScript: {
    single: CommonFormatter.Pound,
    multi: CommonFormatter.SlashAsterisk,
  },
  /**
   * @type {CommentFormatter}
   */
  c: cStyleCommentFormatter,
  /**
   * @type {CommentFormatter}
   */
  cpp: cStyleCommentFormatter,
  /**
   * @type {CommentFormatter}
   */
  cSharp: cStyleCommentFormatter,
  /**
   * @type {SingleCommentFormatter}
   */
  css: {
    single: (value) => `/* ${value} */`,
  },
  /**
   * @type {CommentFormatter}
   */
  fSharp: {
    single: CommonFormatter.DoubleSlash,
    multi: (value) => `(* ${value} *)`,
  },
  /**
   * @type {CommentFormatter}
   */
  go: cStyleCommentFormatter,
  /**
   * @type {CommentFormatter}
   */
  html: xmlCommentFormatter,
  /**
   * @type {CommentFormatter}
   */
  java: cStyleCommentFormatter,
  /**
   * @type {CommentFormatter}
   */
  javaScript: cStyleCommentFormatter,
  /**
   * @type {CommentFormatter}
   */
  jsx: jsxCommentFormatter,
  /**
   * @type {CommentFormatter}
   */
  lua: {
    single: (value) => `-- ${value}`,
    multi: (value) => `--[[ ${value} --]]`,
  },
  /**
   * @type {CommentFormatter}
   */
  perl: {
    single: CommonFormatter.Pound,
    multi: (value) => `=begin ${value} =cut`,
  },
  /**
   * @type {CommentFormatter}
   */
  php: cStyleCommentFormatter,
  /**
   * @type {CommentFormatter}
   */
  powerShell: {
    single: CommonFormatter.Pound,
    multi: (value) => `<# ${value} #>`,
  },
  /**
   * @type {CommentFormatter}
   */
  python: {
    single: CommonFormatter.Pound,
    multi: (value) => {
      // todo
      return value
    },
  },
  /**
   * @type {CommentFormatter}
   */
  r: {
    single: CommonFormatter.Pound,
    multi: (value) => {
      // todo
      return value
    },
  },
  /**
   * @type {CommentFormatter}
   */
  ruby: {
    single: CommonFormatter.Pound,
    multi: (value) => `=begin ${value} =end`,
  },
  /**
   * @type {CommentFormatter}
   */
  rust: cStyleCommentFormatter,
  /**
   * @type {SingleCommentFormatter}
   */
  shellScript: {
    single: CommonFormatter.Pound,
  },
  /**
   * @type {CommentFormatter}
   */
  sql: {
    single: (value) => `--${value}`,
    multi: CommonFormatter.SlashAsterisk,
  },
  /**
   * @type {CommentFormatter}
   */
  swift: cStyleCommentFormatter,
  /**
   * @type {CommentFormatter}
   */
  typeScript: cStyleCommentFormatter,
  /**
   * @type {CommentFormatter}
   */
  vue: cStyleCommentFormatter,
  /**
   * @type {CommentFormatter}
   */
  vueHtml: xmlCommentFormatter,
  /**
   * @type {CommentFormatter}
   */
  xml: xmlCommentFormatter,
}

console.log(
  comment.batch.multi(`Copyright 2021 Igor.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`)
)

module.exports = {
  comment,
}
