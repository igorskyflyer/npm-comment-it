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
    multi: (value) => `::\n${value}\n::`,
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
   * @type {CommentFormatter}
   */
  css: {
    single: (value) => `/* ${value} */`,
    multi: CommonFormatter.SlashAsterisk,
  },
  /**
   * @type {CommentFormatter}
   */
  dart: {
    single: CommonFormatter.DoubleSlash,
    multi: CommonFormatter.DoubleSlash,
  },
  /**
   * @type {CommentFormatter}
   */
  dockerFile: {
    single: CommonFormatter.Pound,
    multi: CommonFormatter.Pound,
  },
  /**
   * @type {CommentFormatter}
   */
  fSharp: {
    single: CommonFormatter.DoubleSlash,
    multi: (value) => `(*\n${value}\n*)`,
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
  kotlin: cStyleCommentFormatter,
  /**
   * @type {CommentFormatter}
   */
  lua: {
    single: (value) => `-- ${value}`,
    multi: (value) => `--[[\n${value}\n--]]`,
  },
  /**
   * @type {CommentFormatter}
   */
  perl: {
    single: CommonFormatter.Pound,
    multi: (value) => `=begin\n${value}\n=cut`,
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
    multi: (value) => `<#\n${value}\n#>`,
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
    multi: (value) => `=begin\n${value}\n=end`,
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
  visualBasic: {
    single: (value) => `' ${value}`,
    // todo
    multi: (value) => `' ${value}`,
  },
  /**
   * @type {CommentFormatter}
   */
  xml: xmlCommentFormatter,
}

module.exports = {
  comment,
}
