$(document).ready(function() {
  $(".carousel").carousel({
    interval: 6000
  });

  /* Show Color Optio Dic When Click On The Gear*/

  $(".gearcheck").click(function() {
    $(".coloroption").fadeToggle();
  });

  var icon_up = $(".icon-up");
  $(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    if (scroll >= 700) {
      $(".navbar-inverse").css("opacity", "0.2");
      icon_up.show();
    } else {
      icon_up.hide();
      $(".navbar-inverse").css("opacity", "1");
    }
  });

  icon_up.click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      600
    );
  });

  var colorli = $(".coloroption ul li");

  colorli.eq(0).css("backgroundColor", "#e41b17");
  colorli.eq(1).css("backgroundColor", "#064fea");

  colorli.click(function() {
    $("link[href*='theme']").attr("href", $(this).attr("data-value"));
  });
});

// Loading Screen

$(window).on("load", function() {
  // Show The Scroll
  /*   $(".loading-overlay .spinner").fadeOut(2000, function() {
    $(this)
      .parent()
      .fadeOut(1000, function() {
        $("body").css("overflow", "auto");
        $(this).remove();
      });
  }); */
});
