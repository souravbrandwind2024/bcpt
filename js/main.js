$( document ).ready(function() {

            // Menu-on-hover-area-start //
            $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
                if ($(window).width() > 750) {
                    var _d = $(e.target).closest('.nav-item');
                    _d.addClass('show');
                    setTimeout(function () {
                        _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
                    }, 1);
                }
            });

         // Menu-on-hover-area-end //

         // Dropdown-area-start //
            $('.dropdown-menu a.dropdown-toggle').click(function (e) {
                if (!$(this).next().hasClass('show')) {
                    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
                }
                var $subMenu = $(this).next(".dropdown-menu");
                $subMenu.toggleClass('show');
    
    
                $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                    $('.dropdown-submenu .show').removeClass("show");
                });
                return false;
            });
        // Dropdown-area-end //



    // sticky-header-area-start //
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('#menu-area').addClass("sticky");
    } else {
        $('#menu-area').removeClass("sticky");
    }
});
// sticky-header-area-end //

 // placement-company-area-start //
 $(".brand-carousel").owlCarousel({
    loop: !0,
    margin: 20,
    nav: !1,
    dots: !1,
    autoplay: !0,
    autoplayTimeout: 3e3,
    smartSpeed: 2300,
    dotsSpeed: 2e3,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 6,
        }
    }
});
// placement-company-area-end  //

// academic-ranking-counter-area-start //
$(".number").counterUp({time:5000});
// academic-ranking-counter-area-end //

// Testimonial-slider-area-start //
if ($('.owl-carousel.client-slider').length > 0) {
    $('.owl-carousel.client-slider').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
}

// Testimonial-slider-area-end //

// scroll-to-top-area-start //
var scrollTop = $(".scrollTop");
$(window).scroll(function () {
$(this).scrollTop() > 100 ? $(scrollTop).css("opacity", "1") : $(scrollTop).css("opacity", "0")
  }),
$(scrollTop).click(function () {
return $("html, body").animate({
  scrollTop: 0
   }, 800),
  !1
});
// scroll-to-top-area-end //


// tooltip-area-start //
$("[data-toggle=tooltip]").tooltip();
// tooltip-area-end //



});




function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }