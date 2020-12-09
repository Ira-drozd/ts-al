$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoWidth: true,
    items: 2,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 2000,
  });

  const $page = $("html, body");
  $('a[href*="#go-to-products"]').click(function () {
    $page.animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      400
    );
    return false;
  });
});
