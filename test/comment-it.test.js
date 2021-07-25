const chai = require('chai').assert
const { comment, supportsLanguage } = require('../src/comment-it')
const cStyleFormatter = require('../src/formatters/cStyleFormatter')
const jsxFormatter = require('../src/formatters/jsxFormatter')
const xmlFormatter = require('../src/formatters/xmlFormatter')
const {
  cStyleResult,
  batchResult,
  dartResult,
  dockerFileResult,
  fSharpResult,
  coffeeScriptResult,
  goResult,
  luaResult,
  perlResult,
  powerShellResult,
  pugResult,
  pythonResult,
  rResult,
  rubyResult,
  shellScriptResult,
  sqlResult,
  visualBasicResult,
} = require('./resources/results')

const singleLine = 'hello world'
const multiLine = `hello


world

this is a test`

describe('🧪 CommentIt! tests 🧪', () => {
  describe('single()', () => {
    it('C, C++, C#, Groovy, Java, JavaScript, Kotlin, Objective-C, Objective-C++, PHP, Razor, Rust, Swift, TypeScript, Vue', () => {
      chai.equal(cStyleFormatter.single(singleLine), `// ${singleLine}`)
    }) // cStyleFormatter

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

    it('Dart', () => {
      chai.equal(comment.dart.single(singleLine), `// ${singleLine}`)
    }) // Dart

    it('Dockerfile', () => {
      chai.equal(comment.dockerFile.single(singleLine), `# ${singleLine}`)
    }) // Dockerfile

    it('F#', () => {
      chai.equal(comment.fSharp.single(singleLine), `// ${singleLine}`)
    }) // F#

    it('Go', () => {
      chai.equal(comment.go.single(singleLine), `// ${singleLine}`)
    }) // Go

    it('Lua', () => {
      chai.equal(comment.lua.single(singleLine), `-- ${singleLine}`)
    }) // Lua

    it('Perl', () => {
      chai.equal(comment.perl.single(singleLine), `# ${singleLine}`)
    }) // Perl

    it('PowerShell', () => {
      chai.equal(comment.perl.single(singleLine), `# ${singleLine}`)
    }) // PowerShell

    it('Pug', () => {
      chai.equal(comment.pug.single(singleLine), `//- ${singleLine}`)
    }) // Pug

    it('Python', () => {
      chai.equal(comment.python.single(singleLine), `# ${singleLine}`)
    }) // Python

    it('R', () => {
      chai.equal(comment.r.single(singleLine), `# ${singleLine}`)
    }) // R

    it('Ruby', () => {
      chai.equal(comment.ruby.single(singleLine), `# ${singleLine}`)
    }) // Ruby

    it('ShellScript', () => {
      chai.equal(comment.shellScript.single(singleLine), `# ${singleLine}`)
    }) // ShellScript

    it('SQL', () => {
      chai.equal(comment.sql.single(singleLine), `-- ${singleLine}`)
    }) // SQL

    it('Visual Basic', () => {
      chai.equal(comment.visualBasic.single(singleLine), `' ${singleLine}`)
    }) // Visual Basic
  }) // single()

  describe('multi()', () => {
    it('C, C++, C#, Groovy, Java, JavaScript, Kotlin, Objective-C, Objective-C++, PHP, Razor, Rust, Swift, TypeScript, Vue', () => {
      chai.equal(cStyleFormatter.multi(multiLine), cStyleResult)
    }) // cStyleFormatter

    it('JSX', () => {
      chai.equal(jsxFormatter.multi(multiLine), `{/* ${multiLine} */}`)
    }) // jsxFormatter

    it('HTML, Vue-HTML, XML', () => {
      chai.equal(xmlFormatter.multi(multiLine), `<!--\n${multiLine}\n-->`)
    }) // xmlFormatter

    it('Batch', () => {
      chai.equal(comment.batch.multi(multiLine), batchResult)
    }) // Batch

    it('CoffeeScript', () => {
      chai.equal(comment.coffeeScript.multi(multiLine), coffeeScriptResult)
    }) // CoffeeScript

    it('CSS', () => {
      chai.equal(comment.css.multi(multiLine), `/* ${multiLine} */`)
    }) // CSS

    it('Dart', () => {
      chai.equal(comment.dart.multi(multiLine), dartResult)
    }) // Dart

    it('Dockerfile', () => {
      chai.equal(comment.dockerFile.multi(multiLine), dockerFileResult)
    }) // Dockerfile

    it('F#', () => {
      chai.equal(comment.fSharp.multi(multiLine), fSharpResult)
    }) // F#

    it('Go', () => {
      chai.equal(comment.go.multi(multiLine), goResult)
    }) // Go

    it('Lua', () => {
      chai.equal(comment.lua.multi(multiLine), luaResult)
    }) // Lua

    it('Perl', () => {
      chai.equal(comment.perl.multi(multiLine), perlResult)
    }) // Perl

    it('PowerShell', () => {
      chai.equal(comment.powerShell.multi(multiLine), powerShellResult)
    }) // PowerShell

    it('Pug', () => {
      chai.equal(comment.pug.multi(multiLine), pugResult)
    }) // Pug

    it('Python', () => {
      chai.equal(comment.python.multi(multiLine), pythonResult)
    }) // Python

    it('R', () => {
      chai.equal(comment.r.multi(multiLine), rResult)
    }) // R

    it('Ruby', () => {
      chai.equal(comment.ruby.multi(multiLine), rubyResult)
    }) // Ruby

    it('ShellScript', () => {
      chai.equal(comment.shellScript.multi(multiLine), shellScriptResult)
    }) // ShellScript

    it('SQL', () => {
      chai.equal(comment.sql.multi(multiLine), sqlResult)
    }) // SQL

    it('Visual Basic', () => {
      chai.equal(comment.visualBasic.multi(multiLine), visualBasicResult)
    }) // Visual Basic
  }) // multi()

  describe('supports()', () => {
    it('should return true', () => {
      chai.isTrue(supportsLanguage('javaScript'))
    })

    it('should return false', () => {
      chai.isFalse(supportsLanguage('javaScripT'))
    })
  }) // supports()
})
