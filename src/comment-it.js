const { CommonFormatter, multilineFormatter } = require('./formatters/commonFormatters')
const cStyleFormatter = require('./formatters/cStyleFormatter')
const doubleSlashFormatter = require('./formatters/doubleSlashFormatter')
const jsxFormatter = require('./formatters/jsxFormatter')
const poundFormatter = require('./formatters/poundFormatter')
const xmlFormatter = require('./formatters/xmlFormatter')

/**
 * @callback CommentTransform
 * @param {string} value
 * @returns {string}
 */

/**
 * @typedef CommentFormatter
 * @property {CommentTransform} single Formats the string as a single-line comments.
 * @property {CommentTransform} multi Formats the string as a multi-line comments.
 */

/**
 * Contains all formatters.
 */
const comment = {
  /**
   * Batch formatter.
   * @type {CommentFormatter}
   */
  batch: {
    single: (value) => `REM ${value}`,
    multi: (value) => multilineFormatter(value, 'REM'),
  },
  /**
   * CoffeeScript formatter.
   * @type {CommentFormatter}
   */
  coffeeScript: {
    single: CommonFormatter.Pound,
    multi: (value) => `###\n${value}\n###`,
  },
  /**
   * C formatter.
   * @type {CommentFormatter}
   */
  c: cStyleFormatter,
  /**
   * C++ formatter.
   * @type {CommentFormatter}
   */
  cpp: cStyleFormatter,
  /**
   * C# formatter.
   * @type {CommentFormatter}
   */
  cSharp: cStyleFormatter,
  /**
   * CSS formatter.
   * @type {CommentFormatter}
   */
  css: {
    single: (value) => `/* ${value} */`,
    multi: CommonFormatter.SlashAsterisk,
  },
  /**
   * Dart formatter.
   * @type {CommentFormatter}
   */
  dart: doubleSlashFormatter,
  /**
   * Dockerfile formatter.
   * @type {CommentFormatter}
   */
  dockerFile: poundFormatter,
  /**
   * F# formatter.
   * @type {CommentFormatter}
   */
  fSharp: {
    single: CommonFormatter.DoubleSlash,
    multi: (value) => `(* ${value} *)`,
  },
  /**
   * Go formatter.
   * @type {CommentFormatter}
   */
  go: doubleSlashFormatter,
  /**
   * Groovy formatter.
   * @type {CommentFormatter}
   */
  groovy: cStyleFormatter,
  /**
   * HTML  formatter.
   * @type {CommentFormatter}
   */
  html: xmlFormatter,
  /**
   * Java formatter.
   * @type {CommentFormatter}
   */
  java: cStyleFormatter,
  /**
   * JavaScript formatter.
   * @type {CommentFormatter}
   */
  javaScript: cStyleFormatter,
  /**
   * JSX formatter.
   * @type {CommentFormatter}
   */
  jsx: jsxFormatter,
  /**
   * Kotlin formatter.
   * @type {CommentFormatter}
   */
  kotlin: cStyleFormatter,
  /**
   * Lua formatter.
   * @type {CommentFormatter}
   */
  lua: {
    single: (value) => `-- ${value}`,
    multi: (value) => `--[[ ${value} --]]`,
  },
  /**
   * Objective-C formatter.
   * @type {CommentFormatter}
   */
  objectiveC: cStyleFormatter,
  /**
   * Objective-C++ formatter.
   * @type {CommentFormatter}
   */
  objectiveCpp: cStyleFormatter,
  /**
   * Perl formatter.
   * @type {CommentFormatter}
   */
  perl: {
    single: CommonFormatter.Pound,
    multi: (value) => `=begin ${value} =cut`,
  },
  /**
   * PHP formatter.
   * @type {CommentFormatter}
   */
  php: cStyleFormatter,
  /**
   * PowerShell formatter.
   * @type {CommentFormatter}
   */
  powerShell: {
    single: CommonFormatter.Pound,
    multi: (value) => `<# ${value} #>`,
  },
  /**
   * Pug/Jade formatter.
   * @type {CommentFormatter}
   */
  pug: {
    single: (value) => `//- ${value}`,
    multi: (value) => `//-\n${multilineFormatter(value, '\t')}`,
  },
  /**
   * Python formatter.
   * @type {CommentFormatter}
   */
  python: poundFormatter,
  /**
   * R formatter.
   * @type {CommentFormatter}
   */
  r: poundFormatter,
  /**
   * Razor  formatter.
   * @type {CommentFormatter}
   */
  razor: cStyleFormatter,
  /**
   * Ruby formatter.
   * @type {CommentFormatter}
   */
  ruby: {
    single: CommonFormatter.Pound,
    multi: (value) => `=begin ${value} =end`,
  },
  /**
   * Rust formatter.
   * @type {CommentFormatter}
   */
  rust: cStyleFormatter,
  /**
   * ShellScript/Bash formatter.
   * @type {CommentFormatter}
   */
  shellScript: poundFormatter,
  /**
   * SQL formatter.
   * @type {CommentFormatter}
   */
  sql: {
    single: (value) => `-- ${value}`,
    multi: CommonFormatter.SlashAsterisk,
  },
  /**
   * Swift formatter.
   * @type {CommentFormatter}
   */
  swift: cStyleFormatter,
  /**
   * TypeScript formatter.
   * @type {CommentFormatter}
   */
  typeScript: cStyleFormatter,
  /**
   * Vue formatter.
   * @type {CommentFormatter}
   */
  vue: cStyleFormatter,
  /**
   * Vue-HTML formatter.
   * @type {CommentFormatter}
   */
  vueHtml: xmlFormatter,
  /**
   * VisualBasic  formatter.
   * @type {CommentFormatter}
   */
  visualBasic: {
    single: (value) => `' ${value}`,
    multi: (value) => multilineFormatter(value, "'"),
  },
  /**
   * XML  formatter.
   * @type {CommentFormatter}
   */
  xml: xmlFormatter,
}

/**
 * Returns whether the given language is supported.
 * @param {string} id
 * @returns {boolean}
 */
function supports(id) {
  return id in comment
}

module.exports = {
  comment,
  supports,
}
