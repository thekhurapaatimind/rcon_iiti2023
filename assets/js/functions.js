(function ($) {
  "use strict";
  $(document).ready(function () {
    $("a[data-rel^=lightcase]").lightcase();
    window.FontAwesomeConfig = { searchPseudoElements: true };
    $(".header-section.style-3").parent("body").addClass("body-padding");
    $(".main-menu>li>.submenu")
      .parent("li")
      .children("a")
      .addClass("dd-icon-down");
    $(".m-menu>li>.m-submenu")
      .parent("li")
      .children("a")
      .addClass("dd-icon-down");
    $(".main-menu>li>.submenu .submenu")
      .parent("li")
      .children("a")
      .addClass("dd-icon-right");
    $(".m-menu>li>.m-submenu .submenu")
      .parent("li")
      .children("a")
      .addClass("dd-icon-right");
    $(document).on("click", ".header-bar", function () {
      $(".mobile-header").toggleClass("close");
    });
    $(".mobile-menu-area .m-menu li a").on("click", function (e) {
      var element = $(this).parent("li");
      if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
        element.find("ul").slideUp(1000, "swing");
      } else {
        element.addClass("open");
        element.children("ul").slideDown(1000, "swing");
        element.siblings("li").children("ul").slideUp(1000, "swing");
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
        element.siblings("li").find("ul").slideUp(1000, "swing");
      }
    });
    $("ul")
      .parent()
      .hover(function () {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
          var newpos = -$(menu).width();
          menu.css({ left: newpos });
        }
      });
    $(".scrollToTop").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
      return false;
    });
    $("td[colspan=3]").find(".content").hide();
    $(document).on("click", ".td-icon", function (event) {
      event.stopPropagation();
      var $target = $(event.target);
      if ($target.closest("td").attr("colspan") > 1) {
        $target.slideUp();
      } else {
        $target.closest("tr").next().find(".content").slideToggle();
      }
    });
    var swiper = new Swiper(".sidebar-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1200,
      pagination: { el: ".sidebar-pagination", clickable: true },
      autoplay: { delay: 2500, disableOnInteraction: false },
      loop: true,
    });
    var swiper = new Swiper(".coverfloww", {
      effect: "coverflow",
      slidesPerView: 2,
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      autoplay: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    var nextyear = "01/15/2023 23:59:00";
    $(".bcr_countdown").countdown({
      date: nextyear,
      offset: +2,
      day: "Day",
      days: "Days",
    });
    $(".ticker").jTicker();
    $(".counter").counterUp({ delay: 10, time: 2000 });
    $(".td-icon").on("click", function () {
      $(".collapse").collapse("toggle");
    });
    $(window).on("load", function () {
      $(".preloader").fadeOut(1000);
      var $grid = $(".grid").isotope({
        itemSelector: ".element-item",
        layoutMode: "fitRows",
        getSortData: {
          name: ".name",
          symbol: ".symbol",
          number: ".number parseInt",
          category: "[data-category]",
          weight: function (itemElem) {
            var weight = $(itemElem).find(".weight").text();
            return parseFloat(weight.replace(/[\(\)]/g, ""));
          },
        },
      });
      $(".grid-one").isotope({
        itemSelector: ".grid-item",
        masonry: { columnWidth: 0 },
      });
      var filterFns = {
        numberGreaterThan50: function () {
          var number = $(this).find(".number").text();
          return parseInt(number, 10) > 50;
        },
        ium: function () {
          var name = $(this).find(".name").text();
          return name.match(/ium$/);
        },
      };
      $("#filters").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({ filter: filterValue });
      });
      $(".button-group").each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on("click", "button", function () {
          $buttonGroup.find(".is-checked").removeClass("is-checked");
          $(this).addClass("is-checked");
        });
      });
    });
    var swiper = new Swiper(".testimonial-slider", {
      slidesPerView: 2,
      slidesPerGroup: 2,
      speed: 1200,
      breakpoints: { 991: { slidesPerView: 1, slidesPerGroup: 1 } },
      navigation: {
        nextEl: ".testimonial-btn-next",
        prevEl: ".testimonial-btn-prev",
      },
      loop: true,
    });
    var swiper = new Swiper(".testimonial-slider-two", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1200,
      autoplay: { delay: 2500, disableOnInteraction: false },
      navigation: {
        nextEl: ".testimonial-btn-next",
        prevEl: ".testimonial-btn-prev",
      },
      loop: true,
    });
    var swiper = new Swiper(".blog-slider", {
      slidesPerView: 3,
      speed: 1200,
      breakpoints: { 1024: { slidesPerView: 2 }, 767: { slidesPerView: 1 } },
      navigation: { nextEl: ".blog-btn-next", prevEl: ".blog-btn-prev" },
      loop: true,
    });
    var swiper = new Swiper(".achive-slider", {
      slidesPerView: 3,
      spaceBetween: 0,
      speed: 1200,
      autoplay: { delay: 2500, disableOnInteraction: false },
      breakpoints: { 991: { slidesPerView: 2 }, 767: { slidesPerView: 1 } },
      navigation: { nextEl: ".achive-btn-next", prevEl: ".achive-btn-prev" },
      loop: true,
    });
    var swiper = new Swiper(".sponsor-slider", {
      slidesPerView: 6,
      spaceBetween: 30,
      speed: 1200,
      autoplay: { delay: 2500, disableOnInteraction: false },
      breakpoints: { 991: { slidesPerView: 3 }, 767: { slidesPerView: 2 } },
      loop: true,
    });
    var swiper = new Swiper(".about-item-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1200,
      pagination: { el: ".about-item-pagination", clickable: true },
      autoplay: { delay: 2500, disableOnInteraction: false },
      loop: true,
    });
    // dropdown accordian
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
    var swiper = new Swiper(".event-venue-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1200,
      pagination: { el: ".event-pagination", clickable: true },
      autoplay: { delay: 2500, disableOnInteraction: false },
      loop: true,
    });
    $(".accordion-item .active1").slideDown();
    $(".accordion-question").on("click", function (e) {
      if ($(this).next(".accordion-answer").css("display") != "block") {
        $(".active1").slideUp(500).removeClass("active1");
        $(".accordion-question").removeClass("in");
        $(this).next(".accordion-answer").addClass("active1").slideDown(500);
        $(this).addClass("in");
      } else {
        $(".active1").slideUp(500).removeClass("active1");
        $(this).removeClass("in");
      }
    });
    $(document).ready(function () {
      $(
        "section .container .sticky-widget, div .container .sticky-widget"
      ).theiaStickySidebar();
    });
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate({ scrollTop: $(hash) }, 800, function () {
          window.location.hash = hash;
        });
      }
    });
    new WOW().init();
  });
  jQuery(window).on("scroll", function () {
    if (jQuery(window).scrollTop() > 100) {
      jQuery(".primary-menu").addClass("sticky-nav");
    } else {
      jQuery(".primary-menu").removeClass("sticky-nav");
    }
  });
})(jQuery);
$(document).ready(function () {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $("nav").outerHeight();
  $(window).scroll(function (event) {
    didScroll = true;
  });
  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 2);
  function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) return;
    if (st > lastScrollTop && st > navbarHeight) {
      $("nav").removeClass("nav-down").addClass("nav-up");
    } else {
      if (st + $(window).height() < $(document).height()) {
        $("nav").removeClass("nav-up").addClass("nav-down");
      }
    }
    lastScrollTop = st;
  }
});
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

let visible = true;
function loadTab() {
  visible = !visible;
  document.getElementById("showmore").classList.toggle("invisible");
  if (visible) {
    document.getElementById("show-text-btn").innerHTML = "Show More";
  } else {
    document.getElementById("show-text-btn").innerHTML = "Hide";
  }
}
