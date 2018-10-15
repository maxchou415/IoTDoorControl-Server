const MQTT = require('async-mqtt')
const config = require('config')
const MQTTConfig = config.get('mqttClient')

module.exports = async (ctx, next) => {
  const client = await MQTT.connect(`tcp://${MQTTConfig.url}:${MQTTConfig.port}`)
  try {
    client.publish('door', 'on')
  } catch (error) {
    ctx.throw(500, 'DOOR_OPEN_FAILED')
  }

  ctx.status = 200
  ctx.body = {
    result: 'success'
  }
}
