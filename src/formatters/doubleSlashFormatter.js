const { CommonFormatter, multilineFormatter } = require('./commonFormatters')

module.exports = {
  single: CommonFormatter.DoubleSlash,
  multi: (value) => multilineFormatter(value, '//'),
}
