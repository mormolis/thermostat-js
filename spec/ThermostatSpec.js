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


});