function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 32;
  this.POWER_SAVING_MAX_TEMPERATURE = 25;
  this.DEFAULT_TEMPERATURE = 20;

  this.temperature = 20;
  this.setPowerSavingOn();
}

Thermostat.prototype.upTemperature = function () {
  if (this.isPowerSavingOn() && this.temperature === this.POWER_SAVING_MAX_TEMPERATURE) throw Error("Power Saving Mode ON, temperature cannot be greater than 25");
  if (this.temperature === this.MAXIMUM_TEMPERATURE) throw Error("Cannot increase the temperature above 32");
  this.temperature += 1;
}

Thermostat.prototype.downTemperature = function () {
  if (this.temperature == this.MINIMUM_TEMPERATURE) throw Error("Temperature cannot fall bellow 10");
  this.temperature -= 1;
}

Thermostat.prototype.setPowerSavingOn = function () {
  this._powerSaving = true;
}

Thermostat.prototype.isPowerSavingOn = function () {
  return this._powerSaving;
}

Thermostat.prototype.setPowerSavingOff = function () {
  this._powerSaving = false;
}

Thermostat.prototype.reset = function () {
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < 18) return "low-usage";
  if (this.temperature < 25) return "medium-usage";
  return "high-usage";
}
