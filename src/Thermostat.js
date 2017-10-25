function Thermostat(){
  this.temperature = 20;
}

Thermostat.prototype.upTemperature = function(){
  this.temperature += 1;
}

Thermostat.prototype.downTemperature = function(){
  if (this.temperature == 10) throw Error("Temperature cannot fall bellow 10");
  this.temperature -= 1;
}