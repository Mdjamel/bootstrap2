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

  /* Click Tabs */
  $(".tabs .tab-switch li").click(function() {
    $(this)
      .addClass("selected")
      .siblings()
      .removeClass("selected");
    // Show Correspond Tabs
    $("." + $(this).data("class"))
      .siblings()
      .css("display", "none");
    $("." + $(this).data("class")).css("display", "block");
  });
});
