$(function() {
  $(window).scroll(function() {
    console.log($(".navbar").height());
    if ($(window).scrollTop() >= $(".navbar").height()) {
      $(".navbar").addClass("scrolled");
      console.log($(".navbar").height());
    } else {
      $(".navbar").removeClass("scrolled");
      console.log("no");
    }
  });
});
