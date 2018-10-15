const mosca = require('mosca')
const config = require('config')

module.exports = () => {
  const ascoltatore = {
    type: config.get('mqtt.database.type'),
    url: config.get('mqtt.database.url'),
    pubsubCollection: config.get('mqtt.database.pubsubCollection'),
    mongo: {}
  }
  const settings = {
    port: config.get('mqtt.port'),
    backend: ascoltatore
  }
  const server = new mosca.Server(settings)

  // MQTT Server Events
  server.on('clientConnected', (client) => {
    console.log('[MQTT Server] Client Connected: ', client.id)
  })

  server.on('published', (packet, client) => {
    console.log('[MQTT Server] Published: ', packet.payload)
  })

  server.on('ready', () => {
    console.log('[MQTT Server] MQTT Server is running')
  })
}
