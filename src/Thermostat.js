function Thermostat(){
  this.temperature = 20;
  this._powerSaving = false;
}

Thermostat.prototype.upTemperature = function(){
  if(this.isPowerSaving() && this.temperature == 25) throw Error("Power Saving Mode ON, temperature cannot be greater than 25") ;
  this.temperature += 1;
}

Thermostat.prototype.downTemperature = function(){
  if (this.temperature == 10) throw Error("Temperature cannot fall bellow 10");
  this.temperature -= 1;
}

Thermostat.prototype.setPowerSaving = function(){
  this._powerSaving = true;
}

Thermostat.prototype.isPowerSaving = function() {
  return this._powerSaving;
}
