$(document).ready(function() {
  $("#projects-page").fadeIn();
$("#projects-page").removeClass();
  var active = "roar";

  var activeDescription = "#roar-project";

  setTimeout(function() {
    $("#roar-project").addClass("active");
  }, 500);



  $(".project-link").click(function (event) {
    $("#projects-page").removeClass();
    active = this.getAttribute("data-project-name");
    activeDescription = "#" + active + "-project";

    $(".project-link").parent().removeClass("active");
    $(this).parent().addClass("active");
    $(".project-description").removeClass("active");
    $(activeDescription).addClass("active");



  });
});

function updateWeather() {
  $('#weather').removeClass();
  weather = $('#weather-select').val()
  $('#weather').addClass(weather);
  // $('#weatherBackground').removeClass();
  // $('#weatherBackground').addClass(weather + 'Background' + " section row margin-top");
  $("#projects-page").removeClass();
  $("#projects-page").addClass(weather + 'Background');
}

$("#expand-mockup").click(function (event) {
  event.preventDefault();
  $("#expand-mockup").text($("#expand-mockup").text() == 'Please, hide the old thing' ? 'Show old design' : 'Please, hide the old thing');
  // $("#expand-mockup").toggle(function () {
  //   $("#expand-mockup").text('Please, hide the old thing').stop();
  // }, function () {
  //   $("#expand-mockup").text('Show old design').stop();
  // });
  $("#mockup").toggle("fade");
})

$("#animation").hover(function () {
  $('#animation').get(0).play();
  $("video").prop('muted', true);
  $(this).unbind('mouseleave');
})

$("#go-to-top").click(function () {
  $('html, body').animate({
      scrollTop: 0
  }, 400);
})
