$(document).ready(function() {
  var activeSection = "";
  var oldSection = "";
  var newSection = "";

  var vh = $(window).height();

  // make a function that fills the array automatic
  var sections = [[0, vh/2], [vh/2, vh + vh/2], [vh + vh/2, 2*vh + vh/2],[2*vh + vh/2, 3*vh + vh/2]]
  for (var i = 0; i < sections.length; i++) {
  }

  var toTop = $(document).scrollTop();
  if (toTop >= sections[0][0] & toTop <= sections[0][1]) {
    activeSection = "header-section";
  } else if (toTop > sections[1][0] & toTop <= sections[1][1]) {
    activeSection = "projects-section";
  } else if (toTop > sections[2][0] & toTop <= sections[2][1]) {
    activeSection = "blog-section";
  } else if (toTop > sections[3][0] & toTop <= sections[3][1]) {
    activeSection = "contact-section";
  }
  var active = activeSection.split("-")[0];
  $(".scroll-item").removeClass("active");
  $("#" + active + "-menuitem").addClass('active');
  $(".scroll-link").click(function(event) {
    if (this.hash !== "") {
      active = this.hash.split("#")[1].split("-")[0];
      newSection = this.hash.split("#")[1];
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $(this.hash).offset().top
      }, 400);
      window.location.hash = this.hash;
      oldSection = activeSection;
      activeSection = newSection;

    }
  })

  var timer;
  // 
  // $(window).scroll(function(event){
  //
  //   if (timer)
  //     clearTimeout(timer);
  //   timer = setTimeout(function() {
  //     var toTop = $(document).scrollTop();
  //     if (toTop >= sections[0][0] & toTop <= sections[0][1]) {
  //       newSection = "header-section";
  //     } else if (toTop > sections[1][0] & toTop <= sections[1][1]) {
  //       newSection = "projects-section";
  //     } else if (toTop > sections[2][0] & toTop <= sections[2][1]) {
  //       newSection = "blog-section";
  //     } else if (toTop > sections[3][0] & toTop <= sections[3][1]) {
  //       newSection = "contact-section";
  //     }
  //     if (activeSection != newSection) {
  //       oldSection = activeSection;
  //       activeSection = newSection;
  //       active = activeSection.split("-")[0];
  //       $('html, body').animate({
  //           scrollTop: $("#" + newSection).offset().top
  //       }, 400);
  //
  //       window.location.hash = newSection;
  //     } else {
  //       event.preventDefault();
  //     }
  //     $(".scroll-item").removeClass("active");
  //     $("#" + active + "-menuitem").addClass('active');
  //   }, 200);
  // });

  $("#go-to-top").click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 400);
  })

  $("#hover-trigger-link").hover(function () {
    $(".hoverable-image").toggleClass("hover");
    $("#weatherBackgroundSmall").toggleClass("hover");
    $("#weather").toggleClass("hover");
  });

});
