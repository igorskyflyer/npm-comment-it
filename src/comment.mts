import type { ICommentObject } from './ICommentObject.mjs'
import { CStyleFormatter } from './formatters/CStyleFormatter.mjs'
import {
  CommonFormatter,
  MultilineFormatter
} from './formatters/CommonFormatters.mjs'
import { DoubleSlashFormatter } from './formatters/DoubleSlashFormatter.mjs'
import { JsxFormatter } from './formatters/JsxFormatter.mjs'
import { PoundFormatter } from './formatters/PoundFormatter.mjs'
import { XmlFormatter } from './formatters/XmlFormatter.mjs'

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
    CStyleFormatter

comment.dart = comment.go = DoubleSlashFormatter

comment.crystal =
  comment.dockerFile =
  comment.elixir =
  comment.perl =
  comment.python =
  comment.r =
  comment.ruby =
  comment.shellScript =
    PoundFormatter

comment.html = comment.vueHtml = comment.xml = XmlFormatter

comment.jsx = JsxFormatter

comment.genie = comment.vala = {
  single: (value: string) => CommonFormatter.DoubleSlash(value),
  multi: CommonFormatter.SlashAsterisk
}

comment.ada = comment.haskell = {
  single: CommonFormatter.DoubleDash,
  multi: (value: string): string => MultilineFormatter(value, '--')
}

comment.batch = {
  single: (value: string): string => `REM ${value}`,
  multi: (value: string): string => MultilineFormatter(value, 'REM')
}

comment.carbon = {
  single: (value: string): string => CommonFormatter.DoubleSlash(value),
  multi: (value: string): string => MultilineFormatter(value, '//')
}

comment.coffeeScript = {
  single: CommonFormatter.Pound,
  multi: (value: string): string => `###\n${value}\n###`
}

comment.css = {
  single: CommonFormatter.SlashAsterisk,
  multi: CommonFormatter.SlashAsterisk
}

comment.delphi = {
  single: (value: string): string => `{ ${value} }`,
  multi: CommonFormatter.StarParen
}

comment.erlang = {
  single: CommonFormatter.Percent,
  multi: (value: string): string => MultilineFormatter(value, '%')
}

comment.euphoria = {
  single: (value: string): string => `#! ${value}`,
  multi: CommonFormatter.SlashAsterisk
}

comment.fortran = {
  single: (value: string): string => `! ${value}`,
  multi: (value: string): string => MultilineFormatter(value, '!')
}

comment.fSharp = {
  single: CommonFormatter.DoubleSlash,
  multi: CommonFormatter.StarParen
}

comment.icon = {
  single: CommonFormatter.Pound,
  multi: (value: string): string => MultilineFormatter(value, '#')
}

comment.julia = {
  single: CommonFormatter.Pound,
  multi: (value: string): string => `#= ${value} =#`
}

comment.lisp = {
  single: CommonFormatter.ColonSingle,
  multi: CommonFormatter.ColonMulti
}

comment.lua = {
  single: CommonFormatter.DoubleDash,
  multi: (value: string): string => `--[[ ${value} --]]`
}

comment.maple = {
  single: (value: string): string => CommonFormatter.Pound(value),
  multi: (value: string): string => CommonFormatter.StarParen(value)
}

comment.matlab = {
  single: CommonFormatter.Percent,
  // requires newlines !
  multi: (value: string): string => `%{\n${value}\n%}`
}

comment.mercury = {
  single: CommonFormatter.Percent,
  multi: (value: string): string => MultilineFormatter(value, '%')
}

comment.oz = {
  single: CommonFormatter.Percent,
  multi: CommonFormatter.SlashAsterisk
}

comment.pascal = {
  single: (value: string): string => `{ ${value} }`,
  multi: CommonFormatter.StarParen
}

comment.powerShell = {
  single: CommonFormatter.Pound,
  multi: (value: string): string => `<# ${value} #>`
}

comment.pug = {
  single: (value: string): string => `//- ${value}`,
  multi: (value: string): string =>
    `//-\n${MultilineFormatter(value, '\t', true)}`
}

comment.q = {
  single: (value: string): string => `/ ${value}`,
  multi: (value: string): string => MultilineFormatter(value, '/')
}

comment.red = {
  single: CommonFormatter.ColonSingle,
  multi: CommonFormatter.ColonMulti
}

comment.sql = {
  single: CommonFormatter.DoubleDash,
  multi: CommonFormatter.SlashAsterisk
}

comment.visualBasic = {
  single: (value: string): string => `' ${value}`,
  multi: (value: string): string => MultilineFormatter(value, "'")
}

// Aliases
comment.bash = comment.shellScript
