function Thermostat() {
  this._MINIMUM_TEMP = 10;
  this._MAXIMUM_TEMP_POWER_MODE_ON = 25;
  this._MAXIMUM_TEMP_POWER_MODE_OFF = 32;
  this._STARTING_TEMP = 20;
  this._MEDIUM_ENERGY_USAGE_LIMIT = 18;
  this._maximumTemp = this._MAXIMUM_TEMP_POWER_MODE_ON;
  this._temp = this._STARTING_TEMP;
}

Thermostat.prototype = {
  currentTemp: function() {
    return this._temp;
  }
};

Thermostat.prototype.increaseTemp = function () {
  if(this._temp < this._maximumTemp) {
    this._temp += 1;
  }
};

Thermostat.prototype.decreaseTemp = function () {
  if(this._temp > this._MINIMUM_TEMP) {
    this._temp -= 1;
  }
};

Thermostat.prototype.powerSavingModeOn = function () {
  this._maximumTemp = this._MAXIMUM_TEMP_POWER_MODE_ON;
};

Thermostat.prototype.powerSavingModeOff = function () {
  this._maximumTemp = this._MAXIMUM_TEMP_POWER_MODE_OFF;
};

Thermostat.prototype.reset = function () {
  this._temp = this._STARTING_TEMP;
};

Thermostat.prototype.displayColour = function () {
  if(this._temp < this._MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'green';
  }
  if (this._temp < this._MAXIMUM_TEMP_POWER_MODE_ON) {
    return 'yellow';
  }
  return 'red';
};
