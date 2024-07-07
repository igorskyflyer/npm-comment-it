// Author: Igor Dimitrijević (@igorskyflyer)

import { assert, describe, suite, test } from 'vitest'
import { CStyleFormatter } from '../src/formatters/CStyleFormatter.mjs'
import { CommonFormatter } from '../src/formatters/CommonFormatters.mjs'
import { DoubleSlashFormatter } from '../src/formatters/DoubleSlashFormatter.mjs'
import { JsxFormatter } from '../src/formatters/JsxFormatter.mjs'
import { PoundFormatter } from '../src/formatters/PoundFormatter.mjs'
import { XmlFormatter } from '../src/formatters/XmlFormatter.mjs'
import {
  alias,
  comment,
  getLanguageIds,
  language,
  supportsLanguage
} from '../src/index.mjs'
import {
  batchResult,
  cStyleResult,
  coffeeScriptResult,
  doubleSlashResult,
  fortranResult,
  haskellResult,
  iconResult,
  juliaResult,
  luaResult,
  matlabResult,
  mercuryResult,
  poundResult,
  powerShellResult,
  pugResult,
  qResult,
  redResult,
  visualBasicResult
} from './resources/results.mjs'

const singleLine: string = 'hello world'
const multiLine: string = `hello


world

this is a test`

describe('🧪 CommentIt! tests 🧪', () => {
  suite('single()', () => {
    test('C, Carbon, C#, C++, Groovy, Hack, Java, JavaScript, Kotlin, LiveCode, MQL4, Objective-C, Objective-C++, PHP, Razor, Ring, Rust, Scala, Swift, TypeScript, Vue', () => {
      assert.equal(CStyleFormatter.single(singleLine), `// ${singleLine}`)
    }) // CStyleFormatter

    test('Dart, Go', () => {
      assert.equal(DoubleSlashFormatter.single(singleLine), `// ${singleLine}`)
    }) // DoubleSlashFormatter

    test('Crystal, Dockerfile, Elixir, Perl, Python, R, Ruby, ShellScript', () => {
      assert.equal(PoundFormatter.single(singleLine), `# ${singleLine}`)
    }) // PoundFormatter

    test('JSX', () => {
      assert.equal(JsxFormatter.single(singleLine), `{/* ${singleLine} */}`)
    }) // JsxFormatter

    test('HTML, Vue-HTML, XML', () => {
      assert.equal(XmlFormatter.single(singleLine), `<!-- ${singleLine} -->`)
    }) // XmlFormatter

    test('Batch', () => {
      assert.equal(comment.batch.single(singleLine), `REM ${singleLine}`)
    }) // Batch

    test('CoffeeScript', () => {
      assert.equal(comment.coffeeScript.single(singleLine), `# ${singleLine}`)
    }) // CoffeeScript

    test('CSS', () => {
      assert.equal(comment.css.single(singleLine), `/* ${singleLine} */`)
    }) // CSS

    test('Delphi, Pascal', () => {
      assert.equal(comment.pascal.single(singleLine), `{ ${singleLine} }`)
    }) // Delphi, Pascal

    test('Euphoria', () => {
      assert.equal(comment.euphoria.single(singleLine), `#! ${singleLine}`)
    }) // Euphoria

    test('F#, Genie, Vala', () => {
      assert.equal(comment.fSharp.single(singleLine), `// ${singleLine}`)
    }) // F#, Genie, Vala

    test('Fortran', () => {
      assert.equal(comment.fortran.multi(multiLine), fortranResult)
    }) // Fortran

    test('Ada, Haskell, Lua', () => {
      assert.equal(comment.lua.single(singleLine), `-- ${singleLine}`)
    }) // Lua, Haskell, Ada

    test('Erlang, MATLAB, Mercury, Oz', () => {
      assert.equal(comment.matlab.single(singleLine), `% ${singleLine}`)
    }) // MATLAB, Mercury, Oz, Erlang

    test('Icon, Julia, Maple, PowerShell', () => {
      assert.equal(comment.perl.single(singleLine), `# ${singleLine}`)
    }) // PowerShell, Maple, Julia

    test('Pug', () => {
      assert.equal(comment.pug.single(singleLine), `//- ${singleLine}`)
    }) // Pug

    test('Q', () => {
      assert.equal(comment.q.single(singleLine), `/ ${singleLine}`)
    }) // Q

    test('Lisp, Red', () => {
      assert.equal(comment.red.single(singleLine), `; ${singleLine}`)
    }) // Red, Lisp

    test('SQL', () => {
      assert.equal(comment.sql.single(singleLine), `-- ${singleLine}`)
    }) // SQL

    test('Visual Basic', () => {
      assert.equal(comment.visualBasic.single(singleLine), `' ${singleLine}`)
    }) // Visual Basic
  }) // single()

  suite('multi()', () => {
    test('C, C#, C++, Groovy, Hack, Java, JavaScript, Kotlin, LiveCode, MQL4, Objective-C, Objective-C++, PHP, Razor, Ring, Rust, Scala, Swift, TypeScript, Vue', () => {
      assert.equal(CStyleFormatter.multi(multiLine), cStyleResult)
    }) // CStyleFormatter

    test('Carbon, Dart, Go', () => {
      assert.equal(DoubleSlashFormatter.multi(multiLine), doubleSlashResult)
    }) // DoubleSlashFormatter

    test('Crystal, Dockerfile, Elixir, Perl, Python, R, Ruby, ShellScript', () => {
      assert.equal(PoundFormatter.multi(multiLine), poundResult)
    }) // PoundFormatter

    test('JSX', () => {
      assert.equal(JsxFormatter.multi(multiLine), `{/* ${multiLine} */}`)
    }) // JsxFormatter

    test('HTML, Vue-HTML, XML', () => {
      assert.equal(XmlFormatter.multi(multiLine), `<!--\n${multiLine}\n-->`)
    }) // XmlFormatter

    test('Delphi, F#, Maple, Pascal', () => {
      assert.equal(CommonFormatter.StarParen(multiLine), `(* ${multiLine} *)`)
    }) // CommonFormatter.StarParen

    test('Batch', () => {
      assert.equal(comment.batch.multi(multiLine), batchResult)
    }) // Batch

    test('CoffeeScript', () => {
      assert.equal(comment.coffeeScript.multi(multiLine), coffeeScriptResult)
    }) // CoffeeScript

    test('CSS, Euphoria, Genie, Oz, SQL, Vala', () => {
      assert.equal(comment.css.multi(multiLine), `/* ${multiLine} */`)
    }) // CSS, SQL

    test('Julia', () => {
      assert.equal(comment.julia.multi(multiLine), juliaResult)
    }) // Julia

    test('Lua', () => {
      assert.equal(comment.lua.multi(multiLine), luaResult)
    }) // Lua

    test('Ada, Haskell', () => {
      assert.equal(comment.haskell.multi(multiLine), haskellResult)
    }) // Haskell, Ada

    test('MATLAB', () => {
      assert.equal(comment.matlab.multi(multiLine), matlabResult)
    }) // MATLAB

    test('Erlang, Mercury', () => {
      assert.equal(comment.mercury.multi(multiLine), mercuryResult)
    }) // Mercury, Erlang

    test('Icon', () => {
      assert.equal(comment.icon.multi(multiLine), iconResult)
    }) // Icon

    test('PowerShell', () => {
      assert.equal(comment.powerShell.multi(multiLine), powerShellResult)
    }) // PowerShell

    test('Pug', () => {
      assert.equal(comment.pug.multi(multiLine), pugResult)
    }) // Pug

    test('Q', () => {
      assert.equal(comment.q.multi(multiLine), qResult)
    }) // Q

    test('Lisp, Red', () => {
      assert.equal(comment.red.multi(multiLine), redResult)
    }) // Red, Lisp

    test('Visual Basic', () => {
      assert.equal(comment.visualBasic.multi(multiLine), visualBasicResult)
    }) // Visual Basic
  }) // multi()

  suite('supports()', () => {
    test('should return true', () => {
      assert.isTrue(supportsLanguage('javaScript'))
    })

    test('should return true', () => {
      assert.isTrue(supportsLanguage('typescript'))
    })

    test('should return false', () => {
      assert.isFalse(supportsLanguage('foo'))
    })
  }) // supports()

  suite('getLanguageIds()', () => {
    test('should return > 0', () => {
      assert.isAbove(getLanguageIds().length, 0)
    })
  }) // getLanguageIds()

  suite('language()', () => {
    test('should return true', () => {
      assert.isObject(language('shellscript'))
    })

    test('should return true', () => {
      assert.isFunction(language('xml')?.single)
    })

    test('should return true', () => {
      assert.isNull(language('foo'))
    })
  }) // language()

  suite('alias()', () => {
    test('should return true', () => {
      assert.isTrue(alias('javaScript', 'js'))
    })

    test('should return true', () => {
      alias('javaScript', 'js')
      assert.equal(comment.js.single(singleLine), `// ${singleLine}`)
    })

    test('should return false', () => {
      // can't overwrite an existing formatter
      assert.isFalse(alias('javaScript', 'jsx'))
    })
  }) // alias()
})
