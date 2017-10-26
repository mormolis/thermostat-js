thermostat = new Thermostat();

function updateTextFields() {
  $("#temperature").text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
  $("#usage").text(thermostat.energyUsage());
}

$(document).ready(function () {
  updateTextFields();

  $("#temperature-up").click(function () {
    thermostat.upTemperature();
    updateTextFields();
  });

  $("#temperature-down").click(function () {
    thermostat.downTemperature();
    updateTextFields();
  });

  $("#temperature-reset").click(function () {
    thermostat.reset();
    updateTextFields();
  });

  $("#powersaving-on").click(function () {
    thermostat.setPowerSavingOn();
    $("#power-saving-status").text("on");
    updateTextFields();
  });

  $("#powersaving-off").click(function () {
    thermostat.setPowerSavingOff();
    $("#power-saving-status").text("off");
    updateTextFields();
  });

  $('#current-city').change(function(){
    var city = $("#current-city").val();

    $.get("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "?id=524901&APPID=47e5fb3b3648e534df38914256b51cc8&units=metric", function (json) {
      $("#cweather").text("Current temperature in " + city + " " + (json.list[0].main["temp"] + "C"));
    });
  });

});