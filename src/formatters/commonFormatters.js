/**
 *
 * @param {string} value
 * @param {string} prefix
 * @returns {string}
 */
const multilineFormatter = (value, prefix) => {
  const lines = value.split(/[\r*\n]{1}/gm)
  const count = lines.length
  let result = ''

  if (count === 0) {
    return ''
  }

  for (let i = 0; i < count; i++) {
    result += `${prefix} ${lines[i]}\n`
  }

  return result
}

const CommonFormatter = {
  DoubleSlash: (value) => `// ${value}`,
  SlashAsterisk: (value) => `/* ${value} */`,
  Pound: (value) => `# ${value}`,
  MultiPound: (value) => multilineFormatter(value, '#'),
}

module.exports = { CommonFormatter, multilineFormatter }
