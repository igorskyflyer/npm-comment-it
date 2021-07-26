const cStyleResult = '/* hello\n\n\nworld\n\nthis is a test */'

const doubleSlashResult = '// hello\n//\n//\n// world\n//\n// this is a test\n'

const poundResult = '# hello\n#\n#\n# world\n#\n# this is a test\n'

const batchResult = 'REM hello\nREM\nREM\nREM world\nREM\nREM this is a test\n'

const coffeeScriptResult = '###\nhello\n\n\nworld\n\nthis is a test\n###'

const fSharpResult = '(* hello\n\n\nworld\n\nthis is a test *)'

const luaResult = '--[[ hello\n\n\nworld\n\nthis is a test --]]'

const powerShellResult = '<# hello\n\n\nworld\n\nthis is a test #>'

const pugResult = '//-\n\t hello\n\t \n\t \n\t world\n\t \n\t this is a test\n'

const visualBasicResult = "' hello\n'\n'\n' world\n'\n' this is a test\n"

module.exports = {
  cStyleResult,
  doubleSlashResult,
  poundResult,
  batchResult,
  coffeeScriptResult,
  fSharpResult,
  luaResult,
  powerShellResult,
  pugResult,
  visualBasicResult,
}
