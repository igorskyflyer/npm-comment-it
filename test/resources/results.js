const cStyleResult = '/* hello\n\n\nworld\n\nthis is a test */'

const doubleSlashResult = '// hello\n//\n//\n// world\n//\n// this is a test\n'

const poundResult = '# hello\n#\n#\n# world\n#\n# this is a test\n'

const batchResult = 'REM hello\nREM\nREM\nREM world\nREM\nREM this is a test\n'

const coffeeScriptResult = '###\nhello\n\n\nworld\n\nthis is a test\n###'

const luaResult = '--[[ hello\n\n\nworld\n\nthis is a test --]]'

const matlabResult = '%{\nhello\n\n\nworld\n\nthis is a test\n%}'

const powerShellResult = '<# hello\n\n\nworld\n\nthis is a test #>'

const pugResult = '//-\n\t hello\n\t \n\t \n\t world\n\t \n\t this is a test\n'

const qResult = '/ hello\n/\n/\n/ world\n/\n/ this is a test\n'

const redResult = '; hello\n;\n;\n; world\n;\n; this is a test\n'

const visualBasicResult = "' hello\n'\n'\n' world\n'\n' this is a test\n"

const mercuryResult = '% hello\n%\n%\n% world\n%\n% this is a test\n'

const iconResult = '# hello\n#\n#\n# world\n#\n# this is a test\n'

const haskellResult = '-- hello\n--\n--\n-- world\n--\n-- this is a test\n'

const fortranResult = '! hello\n!\n!\n! world\n!\n! this is a test\n'

const juliaResult = '#= hello\n\n\nworld\n\nthis is a test =#'

module.exports = {
  cStyleResult,
  doubleSlashResult,
  poundResult,
  batchResult,
  coffeeScriptResult,
  luaResult,
  matlabResult,
  powerShellResult,
  pugResult,
  visualBasicResult,
  redResult,
  qResult,
  mercuryResult,
  iconResult,
  haskellResult,
  fortranResult,
  juliaResult,
}
