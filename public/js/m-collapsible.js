$(document).ready(function () {
  $(".collapsible").collapsible();
});

$(document).ready(function () {
  $(".tabs").tabs();
});

$(document).ready(function () {
  $($(".collapsible-header")[0]).click(function (event) {
    if (!$(event.target).parent("li").hasClass("active")) {
      $("#isolated-systems").removeClass("tabs-display-none");
      $("#uninsulated-systems").addClass("tabs-display-none");
      console.log("qwe1");
    }
  });

  $($(".collapsible-header")[1]).click(function (event) {
    if (!$(event.target).parent("li").hasClass("active")) {
      $("#isolated-systems").addClass("tabs-display-none");
      $("#uninsulated-systems").removeClass("tabs-display-none");
      console.log("qwe2");
    }
  });
});
