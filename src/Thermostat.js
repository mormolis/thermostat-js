function Thermostat(){
  this.temperature = 20;
  this.setPowerSavingOn();
} 

Thermostat.prototype.upTemperature = function(){
  if(this.isPowerSavingOn() && this.temperature == 25) throw Error("Power Saving Mode ON, temperature cannot be greater than 25") ;
  if(this.temperature == 32) throw Error("Cannot increase the temperature above 32");
  this.temperature += 1;
}

Thermostat.prototype.downTemperature = function(){
  if (this.temperature == 10) throw Error("Temperature cannot fall bellow 10");
  this.temperature -= 1;
}

Thermostat.prototype.setPowerSavingOn = function(){
  this._powerSaving = true;
}

Thermostat.prototype.isPowerSavingOn = function() {
  return this._powerSaving;
}

Thermostat.prototype.setPowerSavingOff = function() {
  this._powerSaving = false;
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.energyUsage = function(){
  if(this.temperature < 18) return "low-usage";
  if(this.temperature < 25) return "medium-usage";
  return "high-usage";
}
