describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it('increases temp by 1 degree', function() {
    thermostat.increaseTemp();
    expect(thermostat.currentTemp()).toEqual(21);
  });

  it('decreases temp by 1 degree', function() {
    thermostat.decreaseTemp();
    expect(thermostat.currentTemp()).toEqual(19);
  });

  it('cannot go below 10 degrees', function() {
    for(var i = 1; i < 20; i++){
      thermostat.decreaseTemp();
    }
    expect(thermostat.currentTemp()).toEqual(10);
  });

  it('cannot go above 25 degrees when power saving mode is ON', function() {
    for(var i = 1; i < 20; i++){
      thermostat.increaseTemp();
    }
    expect(thermostat.currentTemp()).toEqual(25);
  });

  it('cannot go above 32 degrees when power saving mode is OFF', function() {
    thermostat.powerSavingModeOff();
    for(var i = 1; i < 20; i++) {
      thermostat.increaseTemp();
    }
    expect(thermostat.currentTemp()).toEqual(32);
  });

  it('reset button changes temperature back to 20', function() {
    for(var i = 1; i < 20; i++){
      thermostat.increaseTemp();
    }
    thermostat.reset();
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it('displays green when temp is below 18', function() {
    for(var i = 1; i < 5; i++){
      thermostat.decreaseTemp();
    }
    expect(thermostat.displayColour()).toEqual('green');
  });

  it('displays yellow when temp is below 25', function() {
    expect(thermostat.displayColour()).toEqual('yellow');
  });

  it('displays red when temp is above 25', function() {
    thermostat.powerSavingModeOff();
    for(var i = 1; i < 10; i++) {
      thermostat.increaseTemp();
    }
    expect(thermostat.displayColour()).toEqual('red');
  });


});
