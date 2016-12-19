function updateWeather() {
  $('#weather').removeClass();
  weather = $('#weather-select').val()
  $('#weather').addClass(weather);
  $('#weatherBackground').removeClass();
  $('#weatherBackground').addClass(weather + 'Background');
}

$(document).ready(function() {

})
