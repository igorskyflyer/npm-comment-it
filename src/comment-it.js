const { strIsIn, findMatch } = require('@igor.dvlpr/str-is-in')

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
 * @typedef Comment
 * @property {CommentFormatter} batch Batch formatter.
 * @property {CommentFormatter} coffeeScript CoffeeScript formatter.
 * @property {CommentFormatter} c C formatter.
 * @property {CommentFormatter} cpp C++ formatter.
 * @property {CommentFormatter} cSharp C# formatter.
 * @property {CommentFormatter} css CSS formatter.
 * @property {CommentFormatter} dart Dart formatter.
 * @property {CommentFormatter} delphi Delphi/Object-Pascal formatter.
 * @property {CommentFormatter} dockerFile Dockerfile formatter.
 * @property {CommentFormatter} fSharp F# formatter.
 * @property {CommentFormatter} go Go formatter.
 * @property {CommentFormatter} groovy Groovy formatter.
 * @property {CommentFormatter} html HTML formatter.
 * @property {CommentFormatter} java Java formatter.
 * @property {CommentFormatter} javaScript JavaScript formatter.
 * @property {CommentFormatter} jsx JSX formatter.
 * @property {CommentFormatter} kotlin Kotlin formatter.
 * @property {CommentFormatter} lua Lua formatter.
 * @property {CommentFormatter} matlab MATLAB formatter.
 * @property {CommentFormatter} objectiveC Objective-C formatter.
 * @property {CommentFormatter} objectiveCpp Objective-C++ formatter.
 * @property {CommentFormatter} pascal Pascal formatter.
 * @property {CommentFormatter} perl Perl formatter.
 * @property {CommentFormatter} php PHP formatter.
 * @property {CommentFormatter} powerShell PowerShell formatter.
 * @property {CommentFormatter} pug Pug/Jade formatter.
 * @property {CommentFormatter} python Python formatter.
 * @property {CommentFormatter} r R formatter.
 * @property {CommentFormatter} razor Razor formatter.
 * @property {CommentFormatter} ruby Ruby formatter.
 * @property {CommentFormatter} rust Rust formatter.
 * @property {CommentFormatter} scala Scala formatter.
 * @property {CommentFormatter} scala Scala formatter.
 * @property {CommentFormatter} shellScript ShellScript/Bash formatter.
 * @property {CommentFormatter} sql SQL formatter.
 * @property {CommentFormatter} swift Swift formatter.
 * @property {CommentFormatter} typeScript TypeScript formatter.
 * @property {CommentFormatter} vue Vue formatter.
 * @property {CommentFormatter} vueHtml Vue-HTML formatter.
 * @property {CommentFormatter} visualBasic Visual Basic formatter.
 * @property {CommentFormatter} xml XML formatter.
 */

/**
 * @type {Comment}
 * Contains all formatters.
 */
const comment = {
  batch: {
    single: (value) => `REM ${value}`,
    multi: (value) => multilineFormatter(value, 'REM'),
  },
  coffeeScript: {
    single: CommonFormatter.Pound,
    multi: (value) => `###\n${value}\n###`,
  },
  c: cStyleFormatter,
  cpp: cStyleFormatter,
  cSharp: cStyleFormatter,
  css: {
    single: CommonFormatter.SlashAsterisk,
    multi: CommonFormatter.SlashAsterisk,
  },
  dart: doubleSlashFormatter,
  delphi: {
    single: (value) => `{ ${value} }`,
    multi: CommonFormatter.StarParen,
  },
  dockerFile: poundFormatter,
  fSharp: {
    single: CommonFormatter.DoubleSlash,
    multi: CommonFormatter.StarParen,
  },
  go: doubleSlashFormatter,
  groovy: cStyleFormatter,
  html: xmlFormatter,
  java: cStyleFormatter,
  javaScript: cStyleFormatter,
  jsx: jsxFormatter,
  kotlin: cStyleFormatter,
  lua: {
    single: (value) => `-- ${value}`,
    multi: (value) => `--[[ ${value} --]]`,
  },
  matlab: {
    single: (value) => `% ${value}`,
    // requires newlines !
    multi: (value) => `%{\n${value}\n%}`,
  },
  objectiveC: cStyleFormatter,
  objectiveCpp: cStyleFormatter,
  pascal: {
    single: (value) => `{ ${value} }`,
    multi: CommonFormatter.StarParen,
  },
  perl: poundFormatter,
  php: cStyleFormatter,
  powerShell: {
    single: CommonFormatter.Pound,
    multi: (value) => `<# ${value} #>`,
  },
  pug: {
    single: (value) => `//- ${value}`,
    multi: (value) => `//-\n${multilineFormatter(value, '\t', true)}`,
  },
  python: poundFormatter,
  r: poundFormatter,
  razor: cStyleFormatter,
  ruby: poundFormatter,
  rust: cStyleFormatter,
  scala: cStyleFormatter,
  shellScript: poundFormatter,
  sql: {
    single: (value) => `-- ${value}`,
    multi: CommonFormatter.SlashAsterisk,
  },
  swift: cStyleFormatter,
  typeScript: cStyleFormatter,
  vue: cStyleFormatter,
  vueHtml: xmlFormatter,
  visualBasic: {
    single: (value) => `' ${value}`,
    multi: (value) => multilineFormatter(value, "'"),
  },
  xml: xmlFormatter,
}

/**
 * Gets IDs of all available language
 * formatters. Language formatters are
 * callable as `comment.\<languageId\>'.
 * @returns {string[]}
 */
function getLanguageIds() {
  return Object.keys(comment)
}

/**
 * Performs a case-insensitive search
 *  for a language formatter with
 * the provided `id` and returns it - if
 * one is found - else returns null.
 * @param {string} id
 * @returns {CommentFormatter|null}
 */
function language(id) {
  if (typeof id !== 'string') {
    return null
  }

  const allLanguages = getLanguageIds()
  const languageId = findMatch.full(id, allLanguages)

  if (languageId.length > 0) {
    return comment[languageId]
  }

  return null
}

/**
 * Returns whether the given language formatter is supported, case-sensitive.
 * @param {string} id
 * @returns {boolean}
 */
function supportsLanguage(id) {
  const languages = Object.keys(comment)

  return strIsIn(id, languages, (langId, myId) => langId.toLowerCase() === myId.toLowerCase())
}

module.exports = {
  comment,
  language,
  supportsLanguage,
  getLanguageIds,
}
