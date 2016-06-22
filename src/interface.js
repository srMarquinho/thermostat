$(document).ready(function() {

  var thermostat = new Thermostat();
  updateTemperature();
  updateOnOff();

  $('#temp-up').click(function() {
    thermostat.upButton();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.downButton();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.resetTemp();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.switchOnPSM();
    $('#power-saving-status').text('ON')
    updateTemperature();
  });

  $('#psm-off').click(function() {
    thermostat.switchOffPSM();
    $('#power-saving-status').text('OFF')
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemp());
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  function updateOnOff() {
    $('#power-saving-status').text(thermostat.onOff());
    $('#power-saving-status').attr('class', thermostat.onOff());
  }
});
