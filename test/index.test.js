const chai = require('chai').assert
const { comment, supportsLanguage, getLanguageIds, language, alias } = require('../src/index.js')
const cStyleFormatter = require('../src/formatters/cStyleFormatter')
const jsxFormatter = require('../src/formatters/jsxFormatter')
const xmlFormatter = require('../src/formatters/xmlFormatter')
const doubleSlashFormatter = require('../src/formatters/doubleSlashFormatter')
const poundFormatter = require('../src/formatters/poundFormatter')
const { CommonFormatter, multilineFormatter } = require('../src/formatters/commonFormatters')
const {
  cStyleResult,
  batchResult,
  coffeeScriptResult,
  luaResult,
  powerShellResult,
  pugResult,
  visualBasicResult,
  doubleSlashResult,
  poundResult,
  matlabResult,
  redResult,
  qResult,
  mercuryResult,
  iconResult,
  haskellResult,
  fortranResult,
  juliaResult,
} = require('./resources/results')

const singleLine = 'hello world'
const multiLine = `hello


world

this is a test`

describe('🧪 CommentIt! tests 🧪', () => {
  describe('single()', () => {
    it('C, C++, C#, Groovy, Java, JavaScript, Kotlin, MQL4, Objective-C, Objective-C++, PHP, Razor, Ring, Rust, Scala, Swift, TypeScript, Vue, LiveCode, Hack', () => {
      chai.equal(cStyleFormatter.single(singleLine), `// ${singleLine}`)
    }) // cStyleFormatter

    it('Dart, Go', () => {
      chai.equal(doubleSlashFormatter.single(singleLine), `// ${singleLine}`)
    }) // doubleSlashFormatter

    it('Dockerfile, Perl, Python, R, Ruby, ShellScript, Elixir, Crystal', () => {
      chai.equal(poundFormatter.single(singleLine), `# ${singleLine}`)
    }) // poundFormatter

    it('JSX', () => {
      chai.equal(jsxFormatter.single(singleLine), `{/* ${singleLine} */}`)
    }) // jsxFormatter

    it('HTML, Vue-HTML, XML', () => {
      chai.equal(xmlFormatter.single(singleLine), `<!-- ${singleLine} -->`)
    }) // xmlFormatter

    it('Batch', () => {
      chai.equal(comment.batch.single(singleLine), `REM ${singleLine}`)
    }) // Batch

    it('CoffeeScript', () => {
      chai.equal(comment.coffeeScript.single(singleLine), `# ${singleLine}`)
    }) // CoffeeScript

    it('CSS', () => {
      chai.equal(comment.css.single(singleLine), `/* ${singleLine} */`)
    }) // CSS

    it('Delphi, Pascal', () => {
      chai.equal(comment.pascal.single(singleLine), `{ ${singleLine} }`)
    }) // Delphi, Pascal

    it('Euphoria', () => {
      chai.equal(comment.euphoria.single(singleLine), `#! ${singleLine}`)
    }) // Euphoria

    it('F#, Genie, Vala', () => {
      chai.equal(comment.fSharp.single(singleLine), `// ${singleLine}`)
    }) // F#, Genie, Vala

    it('Fortran', () => {
      chai.equal(comment.fortran.multi(multiLine), fortranResult)
    }) // Fortran

    it('Lua, Haskell, Ada', () => {
      chai.equal(comment.lua.single(singleLine), `-- ${singleLine}`)
    }) // Lua, Haskell, Ada

    it('MATLAB, Mercury, Oz, Erlang', () => {
      chai.equal(comment.matlab.single(singleLine), `% ${singleLine}`)
    }) // MATLAB, Mercury, Oz, Erlang

    it('PowerShell, Maple, Icon, Julia', () => {
      chai.equal(comment.perl.single(singleLine), `# ${singleLine}`)
    }) // PowerShell, Maple, Julia

    it('Pug', () => {
      chai.equal(comment.pug.single(singleLine), `//- ${singleLine}`)
    }) // Pug

    it('Q', () => {
      chai.equal(comment.q.single(singleLine), `/ ${singleLine}`)
    }) // Q

    it('Red, Lisp', () => {
      chai.equal(comment.red.single(singleLine), `; ${singleLine}`)
    }) // Red, Lisp

    it('SQL', () => {
      chai.equal(comment.sql.single(singleLine), `-- ${singleLine}`)
    }) // SQL

    it('Visual Basic', () => {
      chai.equal(comment.visualBasic.single(singleLine), `' ${singleLine}`)
    }) // Visual Basic
  }) // single()

  describe('multi()', () => {
    it('C, C++, C#, Groovy, Java, JavaScript, Kotlin, MQL4, Objective-C, Objective-C++, PHP, Razor, Ring, Rust, Scala, Swift, TypeScript, Vue, LiveCode, Hack', () => {
      chai.equal(cStyleFormatter.multi(multiLine), cStyleResult)
    }) // cStyleFormatter

    it('Dart, Go', () => {
      chai.equal(doubleSlashFormatter.multi(multiLine), doubleSlashResult)
    }) // doubleSlashFormatter

    it('Dockerfile, Perl, Python, R, Ruby, ShellScript, Elixir, Crystal', () => {
      chai.equal(poundFormatter.multi(multiLine), poundResult)
    }) // poundFormatter

    it('JSX', () => {
      chai.equal(jsxFormatter.multi(multiLine), `{/* ${multiLine} */}`)
    }) // jsxFormatter

    it('HTML, Vue-HTML, XML', () => {
      chai.equal(xmlFormatter.multi(multiLine), `<!--\n${multiLine}\n-->`)
    }) // xmlFormatter

    it('F#, Pascal, Delphi, Maple', () => {
      chai.equal(CommonFormatter.StarParen(multiLine), `(* ${multiLine} *)`)
    }) // CommonFormatter.StarParen

    it('Batch', () => {
      chai.equal(comment.batch.multi(multiLine), batchResult)
    }) // Batch

    it('CoffeeScript', () => {
      chai.equal(comment.coffeeScript.multi(multiLine), coffeeScriptResult)
    }) // CoffeeScript

    it('CSS, Euphoria, Genie, Oz, SQL, Vala', () => {
      chai.equal(comment.css.multi(multiLine), `/* ${multiLine} */`)
    }) // CSS, SQL

    it('Julia', () => {
      chai.equal(comment.julia.multi(multiLine), juliaResult)
    }) // Julia

    it('Lua', () => {
      chai.equal(comment.lua.multi(multiLine), luaResult)
    }) // Lua

    it('Haskell, Ada', () => {
      chai.equal(comment.haskell.multi(multiLine), haskellResult)
    }) // Haskell, Ada

    it('MATLAB', () => {
      chai.equal(comment.matlab.multi(multiLine), matlabResult)
    }) // MATLAB

    it('Mercury, Erlang', () => {
      chai.equal(comment.mercury.multi(multiLine), mercuryResult)
    }) // Mercury, Erlang

    it('Icon', () => {
      chai.equal(comment.icon.multi(multiLine), iconResult)
    }) // Icon

    it('PowerShell', () => {
      chai.equal(comment.powerShell.multi(multiLine), powerShellResult)
    }) // PowerShell

    it('Pug', () => {
      chai.equal(comment.pug.multi(multiLine), pugResult)
    }) // Pug

    it('Q', () => {
      chai.equal(comment.q.multi(multiLine), qResult)
    }) // Q

    it('Red, Lisp', () => {
      chai.equal(comment.red.multi(multiLine), redResult)
    }) // Red, Lisp

    it('Visual Basic', () => {
      chai.equal(comment.visualBasic.multi(multiLine), visualBasicResult)
    }) // Visual Basic
  }) // multi()

  describe('supports()', () => {
    it('should return true', () => {
      chai.isTrue(supportsLanguage('javaScript'))
    })

    it('should return true', () => {
      chai.isTrue(supportsLanguage('typescript'))
    })

    it('should return false', () => {
      chai.isFalse(supportsLanguage('foo'))
    })
  }) // supports()

  describe('getLanguageIds()', () => {
    it('should return > 0', () => {
      chai.isAbove(getLanguageIds().length, 0)
    })
  }) // getLanguageIds()

  describe('language()', () => {
    it('should return true', () => {
      chai.isObject(language('shellscript'))
    })

    it('should return true', () => {
      chai.isNull(language('foo'))
    })
  }) // language()

  describe('alias()', () => {
    it('should return true', () => {
      chai.isTrue(alias('javaScript', 'js'))
    })

    it('should return true', () => {
      alias('javaScript', 'js')
      chai.equal(comment.js.single(singleLine), `// ${singleLine}`)
    })

    it('should return false', () => {
      // can't overwrite an existing formatter
      chai.isFalse(alias('javaScript', 'jsx'))
    })
  }) // alias()
})
