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
 * @typedef {object} CommentFormatter Formatter
 * @property {CommentTransform} single Formats the string as a single-line comments.
 * @property {CommentTransform} multi Formats the string as a multi-line comments.
 */

/**
 * @typedef {Object} BuiltInFormatters
 * @property {CommentFormatter} ada Ada formatter
 * @property {CommentFormatter} bash ShellScript/Bash formatter
 * @property {CommentFormatter} batch Batch formatter
 * @property {CommentFormatter} c C formatter
 * @property {CommentFormatter} cSharp C# formatter
 * @property {CommentFormatter} coffeeScript CoffeeScript formatter
 * @property {CommentFormatter} cpp C++ formatter
 * @property {CommentFormatter} crystal Crystal formatter
 * @property {CommentFormatter} css CSS formatter
 * @property {CommentFormatter} dart Dart formatter
 * @property {CommentFormatter} delphi Delphi formatter
 * @property {CommentFormatter} dockerFile Dockerfile formatter
 * @property {CommentFormatter} elixir Elixir formatter
 * @property {CommentFormatter} erlang Erlang formatter
 * @property {CommentFormatter} euphoria Euphoria formatter
 * @property {CommentFormatter} fortran Fortran formatter
 * @property {CommentFormatter} fSharp F# formatter
 * @property {CommentFormatter} genie Genie formatter
 * @property {CommentFormatter} go Go formatter
 * @property {CommentFormatter} groovy Groovy formatter
 * @property {CommentFormatter} hack Hack formatter
 * @property {CommentFormatter} haskell Haskell formatter
 * @property {CommentFormatter} html HTML formatter
 * @property {CommentFormatter} icon Icon formatter
 * @property {CommentFormatter} java Java formatter
 * @property {CommentFormatter} javaScript JavaScript formatter
 * @property {CommentFormatter} jsx JSX formatter
 * @property {CommentFormatter} julia Julia formatter
 * @property {CommentFormatter} kotlin Kotlin formatter
 * @property {CommentFormatter} lisp Lisp formatter
 * @property {CommentFormatter} liveCode LiveCode formatter
 * @property {CommentFormatter} lua Lua formatter
 * @property {CommentFormatter} maple Maple formatter
 * @property {CommentFormatter} matlab MATLAB formatter
 * @property {CommentFormatter} mercury Mercury formatter
 * @property {CommentFormatter} mql4 MQL4 formatter
 * @property {CommentFormatter} objectiveC Objective-C formatter
 * @property {CommentFormatter} objectiveCpp Objective-C++ formatter
 * @property {CommentFormatter} oz Oz formatter
 * @property {CommentFormatter} pascal Pascal formatter
 * @property {CommentFormatter} perl Perl formatter
 * @property {CommentFormatter} php PHP formatter
 * @property {CommentFormatter} powerShell PowerShell formatter
 * @property {CommentFormatter} pug Pug/Jade formatter
 * @property {CommentFormatter} python Python formatter
 * @property {CommentFormatter} q Q formatter
 * @property {CommentFormatter} r R formatter
 * @property {CommentFormatter} razor Razor formatter
 * @property {CommentFormatter} red Red formatter
 * @property {CommentFormatter} ring Ring formatter
 * @property {CommentFormatter} ruby Ruby formatter
 * @property {CommentFormatter} rust Rust formatter
 * @property {CommentFormatter} scala Scala formatter
 * @property {CommentFormatter} shellScript ShellScript/Bash formatter
 * @property {CommentFormatter} sql SQL formatter
 * @property {CommentFormatter} swift Swift formatter
 * @property {CommentFormatter} typeScript TypeScript formatter
 * @property {CommentFormatter} vala Vala formatter
 * @property {CommentFormatter} visualBasic VisualBasic formatter
 * @property {CommentFormatter} vue Vue formatter
 * @property {CommentFormatter} vueHtml VueHtml formatter
 * @property {CommentFormatter} xml XML formatter
 */

/**
 * @typedef {BuiltInFormatters & Record<string, CommentFormatter>} Comment
 */

/**
 * Contains all formatters.
 * @type {Comment}
 */
const comment = {}

comment.c =
  comment.cpp =
  comment.cSharp =
  comment.groovy =
  comment.hack =
  comment.java =
  comment.javaScript =
  comment.kotlin =
  comment.liveCode =
  comment.mql4 =
  comment.objectiveC =
  comment.objectiveCpp =
  comment.php =
  comment.razor =
  comment.ring =
  comment.rust =
  comment.scala =
  comment.swift =
  comment.typeScript =
  comment.vue =
    cStyleFormatter

comment.dart = comment.go = doubleSlashFormatter

comment.crystal =
  comment.dockerFile =
  comment.elixir =
  comment.perl =
  comment.python =
  comment.r =
  comment.ruby =
  comment.shellScript =
    poundFormatter

comment.html = comment.vueHtml = comment.xml = xmlFormatter

comment.jsx = jsxFormatter

comment.genie = comment.vala = {
  single: (value) => CommonFormatter.DoubleSlash,
  multi: CommonFormatter.SlashAsterisk,
}

comment.ada = comment.haskell = {
  single: CommonFormatter.DoubleDash,
  multi: (value) => multilineFormatter(value, '--'),
}

comment.batch = {
  single: (value) => `REM ${value}`,
  multi: (value) => multilineFormatter(value, 'REM'),
}

comment.coffeeScript = {
  single: CommonFormatter.Pound,
  multi: (value) => `###\n${value}\n###`,
}

comment.css = {
  single: CommonFormatter.SlashAsterisk,
  multi: CommonFormatter.SlashAsterisk,
}

comment.delphi = {
  single: (value) => `{ ${value} }`,
  multi: CommonFormatter.StarParen,
}

comment.erlang = {
  single: CommonFormatter.Percent,
  multi: (value) => multilineFormatter(value, '%'),
}

comment.euphoria = {
  single: (value) => `#! ${value}`,
  multi: CommonFormatter.SlashAsterisk,
}

comment.fortran = {
  single: (value) => `! ${value}`,
  multi: (value) => multilineFormatter(value, '!'),
}

comment.fSharp = {
  single: CommonFormatter.DoubleSlash,
  multi: CommonFormatter.StarParen,
}

comment.icon = {
  single: CommonFormatter.Pound,
  multi: (value) => multilineFormatter(value, '#'),
}

comment.julia = {
  single: CommonFormatter.Pound,
  multi: (value) => `#= ${value} =#`,
}

comment.lisp = {
  single: CommonFormatter.ColonSingle,
  multi: CommonFormatter.ColonMulti,
}

comment.lua = {
  single: CommonFormatter.DoubleDash,
  multi: (value) => `--[[ ${value} --]]`,
}

comment.maple = {
  single: (value) => CommonFormatter.Pound,
  multi: (value) => CommonFormatter.StarParen,
}

comment.matlab = {
  single: CommonFormatter.Percent,
  // requires newlines !
  multi: (value) => `%{\n${value}\n%}`,
}

comment.mercury = {
  single: CommonFormatter.Percent,
  multi: (value) => multilineFormatter(value, '% '),
}

comment.oz = {
  single: CommonFormatter.Percent,
  multi: (value) => CommonFormatter.SlashAsterisk,
}

comment.pascal = {
  single: (value) => `{ ${value} }`,
  multi: CommonFormatter.StarParen,
}

comment.powerShell = {
  single: CommonFormatter.Pound,
  multi: (value) => `<# ${value} #>`,
}

comment.pug = {
  single: (value) => `//- ${value}`,
  multi: (value) => `//-\n${multilineFormatter(value, '\t', true)}`,
}

comment.q = {
  single: (value) => `/ ${value}`,
  multi: (value) => multilineFormatter(value, '/ '),
}

comment.red = {
  single: CommonFormatter.ColonSingle,
  multi: CommonFormatter.ColonMulti,
}

comment.sql = {
  single: CommonFormatter.DoubleDash,
  multi: CommonFormatter.SlashAsterisk,
}

comment.visualBasic = {
  single: (value) => `' ${value}`,
  multi: (value) => multilineFormatter(value, "'"),
}

// Aliases
comment.bash = comment.shellScript

/**
 * Gets IDs of all available language
 * formatters. Language formatters are
 * callable as `comment.<languageId>`.
 * @see comment
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
  const languages = getLanguageIds()

  return strIsIn(id, languages, (langId, myId) => langId.toLowerCase() === myId.toLowerCase())
}

/**
 * Adds an alias for an existing comment formatter.
 * @param {import('./LanguageId').LanguageId} id An identifier of an existing comment formatter.
 * @param {string} alias A new alias name for the comment formatter.
 * @returns {boolean} Returns true upon success, false otherwise.
 */
function alias(id, alias) {
  if (typeof id !== 'string' || typeof alias !== 'string') {
    return false
  }

  if (id.length === 0) {
    return false
  }
  if (alias.length === 0) {
    return false
  }

  const allLanguages = getLanguageIds()

  if (strIsIn(alias, allLanguages)) {
    return false
  }

  const languageId = findMatch.full(id, allLanguages)

  if (languageId.length > 0) {
    comment[alias] = comment[languageId]
    return true
  }

  return false
}

module.exports = {
  comment,
  language,
  supportsLanguage,
  getLanguageIds,
  alias,
}
