// Author: Igor Dimitrijević (@igorskyflyer)

import type { ICommentObject } from './ICommentObject.mjs'
import { cStyleFormatter } from './formatters/cStyleFormatter.mjs'
import {
  commonFormatter,
  multilineFormatter
} from './formatters/commonFormatters.mjs'
import { doubleSlashFormatter } from './formatters/doubleSlashFormatter.mjs'
import { jsxFormatter } from './formatters/jsxFormatter.mjs'
import { poundFormatter } from './formatters/poundFormatter.mjs'
import { xmlFormatter } from './formatters/xmlFormatter.mjs'

export const comment: ICommentObject = {} as ICommentObject

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
  single: (value: string) => commonFormatter.DoubleSlash(value),
  multi: commonFormatter.SlashAsterisk
}

comment.ada = comment.haskell = {
  single: commonFormatter.DoubleDash,
  multi: (value: string): string => multilineFormatter(value, '--')
}

comment.batch = {
  single: (value: string): string => `REM ${value}`,
  multi: (value: string): string => multilineFormatter(value, 'REM')
}

comment.carbon = {
  single: (value: string): string => commonFormatter.DoubleSlash(value),
  multi: (value: string): string => multilineFormatter(value, '//')
}

comment.coffeeScript = {
  single: commonFormatter.Pound,
  multi: (value: string): string => `###\n${value}\n###`
}

comment.css = {
  single: commonFormatter.SlashAsterisk,
  multi: commonFormatter.SlashAsterisk
}

comment.delphi = {
  single: (value: string): string => `{ ${value} }`,
  multi: commonFormatter.StarParen
}

comment.erlang = {
  single: commonFormatter.Percent,
  multi: (value: string): string => multilineFormatter(value, '%')
}

comment.euphoria = {
  single: (value: string): string => `#! ${value}`,
  multi: commonFormatter.SlashAsterisk
}

comment.fortran = {
  single: (value: string): string => `! ${value}`,
  multi: (value: string): string => multilineFormatter(value, '!')
}

comment.fSharp = {
  single: commonFormatter.DoubleSlash,
  multi: commonFormatter.StarParen
}

comment.icon = {
  single: commonFormatter.Pound,
  multi: (value: string): string => multilineFormatter(value, '#')
}

comment.julia = {
  single: commonFormatter.Pound,
  multi: (value: string): string => `#= ${value} =#`
}

comment.lisp = {
  single: commonFormatter.ColonSingle,
  multi: commonFormatter.ColonMulti
}

comment.lua = {
  single: commonFormatter.DoubleDash,
  multi: (value: string): string => `--[[ ${value} --]]`
}

comment.maple = {
  single: (value: string): string => commonFormatter.Pound(value),
  multi: (value: string): string => commonFormatter.StarParen(value)
}

comment.matlab = {
  single: commonFormatter.Percent,
  // requires newlines !
  multi: (value: string): string => `%{\n${value}\n%}`
}

comment.mercury = {
  single: commonFormatter.Percent,
  multi: (value: string): string => multilineFormatter(value, '%')
}

comment.oz = {
  single: commonFormatter.Percent,
  multi: commonFormatter.SlashAsterisk
}

comment.pascal = {
  single: (value: string): string => `{ ${value} }`,
  multi: commonFormatter.StarParen
}

comment.powerShell = {
  single: commonFormatter.Pound,
  multi: (value: string): string => `<# ${value} #>`
}

comment.pug = {
  single: (value: string): string => `//- ${value}`,
  multi: (value: string): string =>
    `//-\n${multilineFormatter(value, '\t', true)}`
}

comment.q = {
  single: (value: string): string => `/ ${value}`,
  multi: (value: string): string => multilineFormatter(value, '/')
}

comment.red = {
  single: commonFormatter.ColonSingle,
  multi: commonFormatter.ColonMulti
}

comment.sql = {
  single: commonFormatter.DoubleDash,
  multi: commonFormatter.SlashAsterisk
}

comment.visualBasic = {
  single: (value: string): string => `' ${value}`,
  multi: (value: string): string => multilineFormatter(value, "'")
}

// Aliases
comment.bash = comment.shellScript
