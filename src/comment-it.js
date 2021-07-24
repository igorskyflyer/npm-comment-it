const { CommonFormatter, multilineFormatter } = require('./formatters/commonFormatters')
const cStyleCommentFormatter = require('./formatters/cStyleCommentFormatter')
const jsxCommentFormatter = require('./formatters/jsxCommentFormatter')
const xmlCommentFormatter = require('./formatters/xmlCommentFormatter')

/**
 * @callback CommentTransform
 * @param {string} value
 * @returns {string}
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
    multi: (value) => multilineFormatter(value, 'REM'),
  },
  /**
   * @type {CommentFormatter}
   */
  coffeeScript: {
    single: CommonFormatter.Pound,
    multi: (value) => `###\n${value}\n###`,
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
    multi: (value) => multilineFormatter(value, '//'),
  },
  /**
   * @type {CommentFormatter}
   */
  dockerFile: {
    single: CommonFormatter.Pound,
    multi: CommonFormatter.MultiPound,
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
  go: {
    single: CommonFormatter.DoubleSlash,
    multi: (value) => multilineFormatter(value, '//'),
  },
  /**
   * @type {CommentFormatter}
   */
  groovy: cStyleCommentFormatter,
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
    multi: (value) => `--[[ ${value} --]]`,
  },
  /**
   * @type {CommentFormatter}
   */
  objectiveC: cStyleCommentFormatter,
  /**
   * @type {CommentFormatter}
   */
  objectiveCpp: cStyleCommentFormatter,
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
  pug: {
    single: (value) => `//- ${value}`,
    multi: (value) => `//-\n${multilineFormatter(value, '\t')}`,
  },
  /**
   * @type {CommentFormatter}
   */
  python: {
    single: CommonFormatter.Pound,
    multi: CommonFormatter.MultiPound,
  },
  /**
   * @type {CommentFormatter}
   */
  r: {
    single: CommonFormatter.Pound,
    multi: CommonFormatter.MultiPound,
  },
  /**
   * @type {CommentFormatter}
   */
  razor: cStyleCommentFormatter,
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
   * @type {CommentFormatter}
   */
  shellScript: {
    single: CommonFormatter.Pound,
    multi: CommonFormatter.MultiPound,
  },
  /**
   * @type {CommentFormatter}
   */
  sql: {
    single: (value) => `-- ${value}`,
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
    multi: (value) => multilineFormatter(value, "'"),
  },
  /**
   * @type {CommentFormatter}
   */
  xml: xmlCommentFormatter,
}

module.exports = {
  comment,
}
