// Author: Igor Dimitrijević (@igorskyflyer)

import type { CommentFormatter } from './CommentFormatter.mjs'

export interface ICommentObjectBase {
  /** Ada formatter */
  ada: CommentFormatter
  /** Bash formatter */
  bash: CommentFormatter
  /** Batch formatter */
  batch: CommentFormatter
  /** C formatter */
  c: CommentFormatter
  /** Carbon formatter */
  carbon: CommentFormatter
  /**  C# formatter */
  cSharp: CommentFormatter
  /** CoffeeScript formatter */
  coffeeScript: CommentFormatter
  /** C++ formatter */
  cpp: CommentFormatter
  /** Crystal formatter */
  crystal: CommentFormatter
  /** CSS formatter */
  css: CommentFormatter
  /** Dart formatter */
  dart: CommentFormatter
  /** Delphi formatter */
  delphi: CommentFormatter
  /** Dockerfile formatter */
  dockerFile: CommentFormatter
  /** Elixir formatter */
  elixir: CommentFormatter
  /** Erlang formatter */
  erlang: CommentFormatter
  /** Euphoria formatter */
  euphoria: CommentFormatter
  /** Fortran formatter */
  fortran: CommentFormatter
  /** F# formatter */
  fSharp: CommentFormatter
  /** Genie formatter */
  genie: CommentFormatter
  /** Go formatter */
  go: CommentFormatter
  /** Groovy formatter */
  groovy: CommentFormatter
  /** Hack formatter */
  hack: CommentFormatter
  /** Haskell formatter */
  haskell: CommentFormatter
  /** HTML formatter */
  html: CommentFormatter
  /** Icon formatter */
  icon: CommentFormatter
  /** Java formatter */
  java: CommentFormatter
  /** JavaScript formatter */
  javaScript: CommentFormatter
  /** JSX formatter */
  jsx: CommentFormatter
  /** Julia formatter */
  julia: CommentFormatter
  /** Kotlin formatter */
  kotlin: CommentFormatter
  /** Lisp formatter */
  lisp: CommentFormatter
  /** LiveCode formatter */
  liveCode: CommentFormatter
  /** Lua formatter */
  lua: CommentFormatter
  /** Maple formatter */
  maple: CommentFormatter
  /** MATLAB formatter */
  matlab: CommentFormatter
  /** Mercury formatter */
  mercury: CommentFormatter
  /** MQL4 formatter */
  mql4: CommentFormatter
  /** Objective-C formatter */
  objectiveC: CommentFormatter
  /** Objective-C++ formatter */
  objectiveCpp: CommentFormatter
  /** Oz formatter */
  oz: CommentFormatter
  /** Pascal formatter */
  pascal: CommentFormatter
  /** Perl formatter */
  perl: CommentFormatter
  /** PHP formatter */
  php: CommentFormatter
  /** PowerShell formatter */
  powerShell: CommentFormatter
  /** Pug/Jade formatter */
  pug: CommentFormatter
  /** Python formatter */
  python: CommentFormatter
  /** Q formatter */
  q: CommentFormatter
  /** R formatter */
  r: CommentFormatter
  /** Razor formatter */
  razor: CommentFormatter
  /** Red formatter */
  red: CommentFormatter
  /** Ring formatter */
  ring: CommentFormatter
  /** Ruby formatter */
  ruby: CommentFormatter
  /** Rust formatter */
  rust: CommentFormatter
  /** Scala formatter */
  scala: CommentFormatter
  /** SQL formatter */
  sql: CommentFormatter
  /** Swift formatter */
  swift: CommentFormatter
  /** TypeScript formatter */
  typeScript: CommentFormatter
  /** Vala formatter */
  vala: CommentFormatter
  /** VisualBasic formatter */
  visualBasic: CommentFormatter
  /** Vue formatter */
  vue: CommentFormatter
  /** VueHtml formatter */
  vueHtml: CommentFormatter
  /** XML formatter */
  xml: CommentFormatter
}

export interface ICommentObject extends ICommentObjectBase {
  /** Custom formatter */
  [language: string]: CommentFormatter
}

export type CommentLanguage = keyof ICommentObjectBase
