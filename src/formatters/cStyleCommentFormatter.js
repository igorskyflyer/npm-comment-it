const cStyleCommentFormatter = {
  single: (value) => `// ${value}`,
  multi: (value) => `/* ${value} */`,
}

module.exports = cStyleCommentFormatter
