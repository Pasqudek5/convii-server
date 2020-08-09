const escape = value => value.replace(/[^\x20-\x7E]/g, '')

module.exports = {
  escape
}