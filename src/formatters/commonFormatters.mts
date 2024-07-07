/**
 *
 * @param {string} value
 * @param {string} prefix
 * @returns {string}
 */
const multilineFormatter = (value, prefix, spaceNewlines = false) => {
  const lines = value.split(/[\r*\n]{1}/gm)
  const count = lines.length
  let result = ''

  if (count === 0) {
    return ''
  }

  for (let i = 0; i < count; i++) {
    const line = lines[i]
    let space = ' '

    if (!spaceNewlines && line === '') {
      space = ''
    }

    result += `${prefix}${space}${lines[i]}\n`
  }

  return result
}

/**
 * @type {Object.<string, import('../index.js').CommentTransform>}
 */
const CommonFormatter = {
  ColonMulti: (value) => multilineFormatter(value, ';'),
  ColonSingle: (value) => `; ${value}`,
  DoubleDash: (value) => `-- ${value}`,
  DoubleSlash: (value) => `// ${value}`,
  Percent: (value) => `% ${value}`,
  Pound: (value) => `# ${value}`,
  SlashAsterisk: (value) => `/* ${value} */`,
  MultiPound: (value) => multilineFormatter(value, '#'),
  StarParen: (value) => `(* ${value} *)`,
}

module.exports = { CommonFormatter, multilineFormatter }
