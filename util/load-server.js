var isObject = require('./is').object
var defaultServer = {
  publicPath: '/',
  port: 8080,
  hot: true,
  historyApiFallback: true,
  lazy: false,
  stats: 'errors-only',
  protocol: 'http:',
  hostname: 'localhost'
}

module.exports = function (server) {
  // null, undefined, false
  if (!server || server === false) {
    return {}
  }

  // object
  if (isObject(server)) {
    return Object.assign(defaultServer, server)
  }

  // array, string, true, number .etc
  return defaultServer
}
