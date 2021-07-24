const cStyleFormatter = {
  single: (value) => `// ${value}`,
  multi: (value) => `/* ${value} */`,
}

module.exports = cStyleFormatter
