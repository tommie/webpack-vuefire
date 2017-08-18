/* eslint-disable */
var _WebSocketConnection = require('firebase/database/realtime/WebSocketConnection')

// Firebase has strict requirements about the hostname format. So we provide a dummy
// hostname and then change the URL to localhost inside the faye-websocket's Client
// constructor.
_WebSocketConnection.setWebSocketImpl(function LocalWebSocket(url) {
  var u = new URL(url)
  if (/^[^.]+\.firebaseio\.com$/.test(u.hostname)) {
    u.host = window.location.host
    u.port = window.location.port
    u.protocol = 'ws:'
    console.log('Redirecting firebase websocket to', u.href)
  }
  return new WebSocket(u.href)
})

if (process.env.NODE_ENV === 'development') {
  require('eventsource-polyfill')
  var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

  hotClient.subscribe(function (event) {
    if (event.action === 'reload') {
      window.location.reload()
    }
  })
}
