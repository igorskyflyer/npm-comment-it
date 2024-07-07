/**
 * @type {Object.<string, import('../index.js').CommentTransform>}
 */
const cStyleFormatter = {
  single: (value) => `// ${value}`,
  multi: (value) => `/* ${value} */`,
}

module.exports = cStyleFormatter
