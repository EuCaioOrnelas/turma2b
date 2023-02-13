window.addEventListener("scroll", function () {
  let header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  if (scrollY > 100) {
    console.log("oi");
    document.querySelector("scroll-up-btn").classList.add("show");
  } else {
    document.querySelector("scroll-up-btn").classList.remove("show");
  }
});

/*$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });*/

/* menu mobile*/

/*$(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  $(".menu li a").on("click", function () {
    $(".menu-btn").trigger("click");
  });

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPauser: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});*/
