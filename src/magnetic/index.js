const gpio = require('rpi-gpio');
const handlers = require('./handlers');


exports.magneticSensorCollector = function(pin) {

  gpio.setMode(gpio.MODE_BCM);
  console.log('======== start collecting magnetic door sensor ======');

  setInterval(function() {
    gpio.setup(pin, gpio.DIR_IN, gpio.EDGE_BOTH, handlers.readInput(pin));
  }, 1000);

};
