/**
 * @type {Object.<string, import('../index.js').CommentTransform>}
 */
module.exports = {
  single: (value) => `<!-- ${value} -->`,
  multi: (value) => `<!--\n${value}\n-->`,
}
