let currentCurrency = document.querySelector("#current-currency"),
  currencyItems = document.querySelectorAll(".currency_item"),
  accBtn = document.querySelectorAll(".dropdown_toggler"),
  accBody = document.querySelectorAll(".dropdown_details");

//  ######### Currency Change ############;

currencyItems.forEach((item) => {
  item.addEventListener("click", () => {
    let newCurrency = item.getAttribute("data-currency");
    currentCurrency.innerText = newCurrency;
  });
});
/* ################## nav bar action accordion ##################### */

accBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    accBody.forEach((acc) => {
      if (
        e.target.nextElementSibling !== acc &&
        acc.classList.contains("active")
      ) {
        acc.classList.remove("active");
      }
    });
    let panel = btn.nextElementSibling;
    panel.classList.toggle("active");
  });
});
//  Banner carousel

$(".owl-1").owlCarousel({
  autoplayTimeout: 500000,
  autoplay: true,
  rewind: true,
  loop: true,
  dots: true,
  nav: true,
  dotsEach: true,
  autoplayHoverPause: true,
  mouseDrag: false,
  smartSpeed: 800,
  items: 1,
  animateOut: "fadeOut",
});
$(".owl-2 ").owlCarousel({
  autoplayTimeout: 500000,
  autoplay: true,
  rewind: true,
  loop: true,
  dots: true,
  nav: true,
  dotsEach: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  smartSpeed: 800,
  items: 4,
  animateOut: "fadeOut",

  responsive: {
    0: {
      items: 1,
    },
    501: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1180: {
      items: 4,
    },
  },
});
$(" .owl-3").owlCarousel({
  dots: false,
  nav: false,
  dotsEach: false,
  autoplayHoverPause: true,
  mouseDrag: true,
  autoplayTimeout: 500000,
  autoplay: true,
  rewind: true,
  loop: true,
  margin: 20,
  responsive: {
    0: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1100: {
      items: 4,
    },
    1180: {
      items: 5,
    },
  },
});
