const chai = require('chai').assert
const { comment, supportsLanguage, getLanguageIds, language } = require('../src/comment-it')
const cStyleFormatter = require('../src/formatters/cStyleFormatter')
const jsxFormatter = require('../src/formatters/jsxFormatter')
const xmlFormatter = require('../src/formatters/xmlFormatter')
const doubleSlashFormatter = require('../src/formatters/doubleSlashFormatter')
const poundFormatter = require('../src/formatters/poundFormatter')
const { CommonFormatter } = require('../src/formatters/commonFormatters')
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
} = require('./resources/results')

const singleLine = 'hello world'
const multiLine = `hello


world

this is a test`

describe('🧪 CommentIt! tests 🧪', () => {
  describe('single()', () => {
    it('C, C++, C#, Groovy, Java, JavaScript, Kotlin, Objective-C, Objective-C++, PHP, Razor, Rust, Scala, Swift, TypeScript, Vue', () => {
      chai.equal(cStyleFormatter.single(singleLine), `// ${singleLine}`)
    }) // cStyleFormatter

    it('Dart, Go', () => {
      chai.equal(doubleSlashFormatter.single(singleLine), `// ${singleLine}`)
    }) // doubleSlashFormatter

    it('Dockerfile, Perl, Python, R, Ruby, ShellScript', () => {
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
    }) // Delphi

    it('F#', () => {
      chai.equal(comment.fSharp.single(singleLine), `// ${singleLine}`)
    }) // F#

    it('Lua', () => {
      chai.equal(comment.lua.single(singleLine), `-- ${singleLine}`)
    }) // Lua

    it('MATLAB', () => {
      chai.equal(comment.matlab.single(singleLine), `% ${singleLine}`)
    }) // MATLAB

    it('PowerShell', () => {
      chai.equal(comment.perl.single(singleLine), `# ${singleLine}`)
    }) // PowerShell

    it('Pug', () => {
      chai.equal(comment.pug.single(singleLine), `//- ${singleLine}`)
    }) // Pug

    it('SQL', () => {
      chai.equal(comment.sql.single(singleLine), `-- ${singleLine}`)
    }) // SQL

    it('Visual Basic', () => {
      chai.equal(comment.visualBasic.single(singleLine), `' ${singleLine}`)
    }) // Visual Basic
  }) // single()

  describe('multi()', () => {
    it('C, C++, C#, Groovy, Java, JavaScript, Kotlin, Objective-C, Objective-C++, PHP, Razor, Rust, Scala, Swift, TypeScript, Vue', () => {
      chai.equal(cStyleFormatter.multi(multiLine), cStyleResult)
    }) // cStyleFormatter

    it('Dart, Go', () => {
      chai.equal(doubleSlashFormatter.multi(multiLine), doubleSlashResult)
    }) // doubleSlashFormatter

    it('Dockerfile, Perl, Python, R, Ruby, ShellScript', () => {
      chai.equal(poundFormatter.multi(multiLine), poundResult)
    }) // poundFormatter

    it('JSX', () => {
      chai.equal(jsxFormatter.multi(multiLine), `{/* ${multiLine} */}`)
    }) // jsxFormatter

    it('HTML, Vue-HTML, XML', () => {
      chai.equal(xmlFormatter.multi(multiLine), `<!--\n${multiLine}\n-->`)
    }) // xmlFormatter

    it('F#, Pascal, Delphi', () => {
      chai.equal(CommonFormatter.StarParen(multiLine), `(* ${multiLine} *)`)
    }) // CommonFormatter.StarParen

    it('Batch', () => {
      chai.equal(comment.batch.multi(multiLine), batchResult)
    }) // Batch

    it('CoffeeScript', () => {
      chai.equal(comment.coffeeScript.multi(multiLine), coffeeScriptResult)
    }) // CoffeeScript

    it('CSS, SQL', () => {
      chai.equal(comment.css.multi(multiLine), `/* ${multiLine} */`)
    }) // CSS, SQL

    it('Lua', () => {
      chai.equal(comment.lua.multi(multiLine), luaResult)
    }) // Lua

    it('MATLAB', () => {
      chai.equal(comment.matlab.multi(multiLine), matlabResult)
    }) // MATLAB

    it('PowerShell', () => {
      chai.equal(comment.powerShell.multi(multiLine), powerShellResult)
    }) // PowerShell

    it('Pug', () => {
      chai.equal(comment.pug.multi(multiLine), pugResult)
    }) // Pug

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
})
