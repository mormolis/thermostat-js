describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("should have a default temperature value of 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it("#upTemperature should raise the temperature by 1 degree", function(){
    thermostat.upTemperature();
    expect(thermostat.temperature).toEqual(21);
  });

  it("#downTemperature should drop the temperature by 1 degree", function(){
    thermostat.downTemperature();
    expect(thermostat.temperature).toEqual(19);
  });

  it("should not allow the temperature fall bellow 10 degrees", function(){
    for(var i = 0; i <10; i++){
      thermostat.downTemperature();
    }
    expect(function(){thermostat.downTemperature()}).toThrowError("Temperature cannot fall bellow 10");
  });

  it("#setPowerSavingOn should turn on power saving mode", function(){
    thermostat.setPowerSavingOn();
    expect(thermostat.isPowerSavingOn()).toEqual(true);
  });

  it("does not allow temperature to be more than 25 degrees when power saving mode is on", function(){
    thermostat.setPowerSavingOn();
    for(var i = 0; i < 5; i++){
      thermostat.upTemperature();
    }
    expect(function(){ thermostat.upTemperature() }).toThrowError("Power Saving Mode ON, temperature cannot be greater than 25");
  });

  it("allows temperature to be more than 25 degrees when power saving mode is off", function(){
    thermostat.setPowerSavingOff();
    for(var i = 0; i <= 5; i++){
      thermostat.upTemperature();
    }
    expect(thermostat.temperature).toEqual(26);
  });

  it("does not allow temperature to be more than 32 degrees when power saving mode is off", function(){
    thermostat.setPowerSavingOff();
    for(var i=0; i<12; i++){
      thermostat.upTemperature();
    }
    expect(function(){thermostat.upTemperature()}).toThrowError("Cannot increase the temperature above 32")
  });

  it("#reset resets the temperature to 20 degrees", function(){
    for(var i=0; i<4; i++){
      thermostat.upTemperature();
    }
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it("#energyUsage should return 'low-usage' if temperature is bellow 18", function(){
    for(var i=0; i<4; i++){
      thermostat.downTemperature();
    }
    console.log("low", thermostat.temperature);
    expect(thermostat.energyUsage()).toEqual("low-usage");
  });

  it("#energyUsage should return 'medium-usage' if temperature is bellow 25 and above 18", function(){
    for(var i=0; i<4; i++){
      thermostat.upTemperature();
    }
    console.log("medium", thermostat.temperature);
    expect(thermostat.energyUsage()).toEqual("medium-usage");
  });

  it("#energyUsage should return 'high-usage' if temperature is 25 and above", function(){
    for(var i=0; i<=4; i++){
      thermostat.upTemperature();
    }
    console.log("high", thermostat.temperature);
    expect(thermostat.energyUsage()).toEqual("high-usage");
  });


});
