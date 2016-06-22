$(document).ready(function() {

  var thermostat = new Thermostat();
  updateTemperature();

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
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.switchOffPSM();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemp());
    $('#temperature').attr('class', thermostat.energyUsage());
  }

});
