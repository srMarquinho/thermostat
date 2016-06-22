'use strict';


describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20degrees', function() {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  it('increases temperature with the up button', function() {
    thermostat.upButton();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });

  it('decreases temperature with the up button', function() {
    thermostat.downButton();
    expect(thermostat.getCurrentTemp()).toEqual(19);
  });

  it('has a minimum temperature of 10deg', function() {
    for (var i = 1; i < 20; i++) {
      thermostat.downButton();
    };
    expect(thermostat.getCurrentTemp()).toEqual(10);
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch off PSM', function() {
    thermostat.switchOffPSM();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch on PSM', function() {
    thermostat.switchOffPSM();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchOnPSM();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can be reset to 20deg', function() {
    thermostat._temperature = 25;
    thermostat.resetTemp();
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  describe('when power saving mode is on', function() {
    it('has a maximum temperature of 25deg', function() {
      for (var i = 1; i < 10; i++) {
        thermostat.upButton();
      };
      expect(thermostat.getCurrentTemp()).toEqual(25);
    });
  });

  describe('when power saving mode is off', function() {
    it('has a maximum temperature of 25deg', function() {
      thermostat.switchOffPSM();
      for (var i = 1; i < 20; i++) {
        thermostat.upButton();
      };
      expect(thermostat.getCurrentTemp()).toEqual(32);
    });
  });

  describe('displays red, yellow or green depending on temperature', function() {
    it('displays green if temperature is less than 18deg', function() {
      thermostat._temperature = 17;
      expect(thermostat.display()).toEqual('green');
    });

    it('displays yellow if temperature is less than 25deg', function() {
      expect(thermostat.display()).toEqual('yellow');
    });

    it('displays red if temperature is greater or equal to 25deg', function() {
      thermostat._temperature = 25;
      expect(thermostat.display()).toEqual('red');
    });
  });
});
