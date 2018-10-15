module.exports = {
  database: {
    port: 27017,
    url: 'localhost',
    name: 'IOT_DOOR_CONTROL'
  },
  mqtt: {
    port: 9991,
    database: {
      type: 'mongo',
      url: 'mongodb://localhost:27017/IOT_DOOR_CONTROL_MQTT',
      pubsubCollection: 'ascoltatori'
    }
  },
  mqttClient: {
    port: 9991,
    url: 'localhost'
  }
}
