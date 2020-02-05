
$(document).ready(function(){
  var firstload

  var thermostat = new Thermostat();
  updateEnergyUsage()
  updateTemperature()

  $('#temp-up').click(function(){
    thermostat.up();
    updateEnergyUsage()
    updateTemperature()
  })

  $('#temp-down').click(function(){
    thermostat.down();
    updateEnergyUsage()
    updateTemperature()
  })

  $('#temp-reset').click(function(){
    thermostat.resetTemp();
    updateEnergyUsage()
    updateTemperature()
  })

  $('#powerswitch').click(function(){
    thermostat.powerSaveSwitch();
    if (thermostat.powerSaveMode === true){
      $('#powerswitch').css('color','green');
    } else {
      $('#powerswitch').css('color','red');
    }
  })

  function updateEnergyUsage() {
    $('.usage').text(thermostat.energyUsage())
  }

  function updateTemperature(){
    if (firstload === null){
      firstload = "No";
      var loadTemp = $.jStorage.get("temperature");
      if (loadTemp > 0) {
        thermostat.getCurrentTemperature = loadTemp
      };
    };
      
    $('.temperature').text(thermostat.temperature)
    $('.temperature').attr('id', thermostat.energyUsage());
    $.jStorage.set('temperature', thermostat.temperature);
  };



  $('.showCity').click(function() {
// Using the core $.ajax() method
    $.ajax({ 
      url: "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6cf212010627f67e2f4d845a80fa8191&units=metric", 
      dataType : "json",
    })
    // Code to run if the request succeeds (is done);
    // The response is passed to the function   #### jason.main.temp taken from file as shown in browser 
    .done(function(json) {
       $('.cityTemp').text(json.main.temp);
    })
  })
  
})












