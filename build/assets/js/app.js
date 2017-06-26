$(document).ready(function() {
    var messagePush = false;
    var openMenu = true
    var heightMenu, displayMenu, newClass;
    var str, name, phone, emailBottom, textBottom = '';
    // JSON
    $(".messagePush").click(function() {

        name = $(".modal__openName").val();
        phone = $(".modal__openPhone").val();

        name = name + $(".footer__BoxDateName").val();
        phone = phone + $(".footer__BoxDatePhone").val();
        emailBottom = $(".footer__BoxDateEmail").val();
        textBottom = $(".footer__BoxText").val();

        if (name == '') {
            $(".footer__BoxDateName, .modal__openName").css('background', '#ff9999');
            $(".footer__BoxDateName, .modal__openName").css('box-shadow', '0 0 5px 3px #ff3333');
        } else {
            $(".footer__BoxDateName, .modal__openName").css('background', 'none');
            $(".footer__BoxDateName, .modal__openName").css('box-shadow', 'none');
        }
        if (phone == '') {
            $(".footer__BoxDatePhone, .modal__openPhone").css('background', '#ff9999');
            $(".footer__BoxDatePhone, .modal__openPhone").css('box-shadow', '0 0 5px 3px #ff3333');
        } else {
            $(".footer__BoxDatePhone, .modal__openPhone").css('background', 'none');
            $(".footer__BoxDatePhone, .modal__openPhone").css('box-shadow', 'none');
        }

        if (name && phone) {
            jQuery.ajax({
                url: "assets/php/mail.php",
                type: "POST",
                dataType: "JSON",
                data: {
                    user_name: name,
                    user_phone: phone,
                    user_email: emailBottom,
                    user_text: textBottom
                },
                success: function(data) {
                    if (data.Yes == 'yes') {
                        messagePush = true;
                    }
                }
            });
        };
    });
    // End JSON
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Open Modal
    $(".open__modal").click(function() {
        $(".overlay").css({
            display: 'block'
        });
        $(".modal").css({
            display: 'block'
        });
        $(".modal").animate({
            left: '50%'
        }, 500)
    });
    $(".overlay, .modal__close").click(function() {
        $(".modal").animate({
            left: '120%'
        }, 500, function() {
            $(".modal").css({
                display: 'none'
            });
            $(".overlay").css({
                display: 'none'
            });
        });

    });

    if (messagePush) {
        $(".modal__open, .bottomForm").fadeOut(600, displayThanksPage);

        function displayThanksPage() {
            $(".modal__open, .bottomForm, .footer__title").css(
                'display', 'none'
            );
            $(".thanksPage").css(
                'display', 'flex'
            );
        }
    };

    // End Open Modal
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Open Menu
    $(".header__phoneMenu").click(function() {
        openMenu ? heightMenu = '270px' : heightMenu = '60px';
        openMenu ? displayMenu = 'flex' : displayMenu = 'none';
        openMenu ? $(".header__phoneMenu").addClass('active') : $(".header__phoneMenu").removeClass('active');
        $(".header").animate({
            height: heightMenu
        }, 500, function() {
            $(".header__menu").css({
                display: displayMenu
            });
            openMenu = !openMenu;
        });
    });

    // End Open Menu
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Slider
    $('.section__fourthGallery').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 300,
        margin: 20,
        responsive: {
            320: {
                items: 1,
            },
            360: {
                items: 2
            },
            380: {
                items: 2
            },
            420: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });
    $('.section__sixthBox').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 300,
        margin: 20,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    // End Slider
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Mask input
    $(function() {
        $(".modal__openPhone").mask("+7(999) 999-99-99");
        $(".footer__BoxDatePhone").mask("+7(999) 999-99-99");
    });
    // End Mask input
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Header shadow
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $(".header").css('box-shadow', '0 0 20px 0');
        } else {
           $(".header").css('box-shadow', 'none');
        }
    });
    // Endheader shadow
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgbWVzc2FnZVB1c2ggPSBmYWxzZTtcclxuICAgIHZhciBvcGVuTWVudSA9IHRydWVcclxuICAgIHZhciBoZWlnaHRNZW51LCBkaXNwbGF5TWVudSwgbmV3Q2xhc3M7XHJcbiAgICB2YXIgc3RyLCBuYW1lLCBwaG9uZSwgZW1haWxCb3R0b20sIHRleHRCb3R0b20gPSAnJztcclxuICAgIC8vIEpTT05cclxuICAgICQoXCIubWVzc2FnZVB1c2hcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIG5hbWUgPSAkKFwiLm1vZGFsX19vcGVuTmFtZVwiKS52YWwoKTtcclxuICAgICAgICBwaG9uZSA9ICQoXCIubW9kYWxfX29wZW5QaG9uZVwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgbmFtZSA9IG5hbWUgKyAkKFwiLmZvb3Rlcl9fQm94RGF0ZU5hbWVcIikudmFsKCk7XHJcbiAgICAgICAgcGhvbmUgPSBwaG9uZSArICQoXCIuZm9vdGVyX19Cb3hEYXRlUGhvbmVcIikudmFsKCk7XHJcbiAgICAgICAgZW1haWxCb3R0b20gPSAkKFwiLmZvb3Rlcl9fQm94RGF0ZUVtYWlsXCIpLnZhbCgpO1xyXG4gICAgICAgIHRleHRCb3R0b20gPSAkKFwiLmZvb3Rlcl9fQm94VGV4dFwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKG5hbWUgPT0gJycpIHtcclxuICAgICAgICAgICAgJChcIi5mb290ZXJfX0JveERhdGVOYW1lLCAubW9kYWxfX29wZW5OYW1lXCIpLmNzcygnYmFja2dyb3VuZCcsICcjZmY5OTk5Jyk7XHJcbiAgICAgICAgICAgICQoXCIuZm9vdGVyX19Cb3hEYXRlTmFtZSwgLm1vZGFsX19vcGVuTmFtZVwiKS5jc3MoJ2JveC1zaGFkb3cnLCAnMCAwIDVweCAzcHggI2ZmMzMzMycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIuZm9vdGVyX19Cb3hEYXRlTmFtZSwgLm1vZGFsX19vcGVuTmFtZVwiKS5jc3MoJ2JhY2tncm91bmQnLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAkKFwiLmZvb3Rlcl9fQm94RGF0ZU5hbWUsIC5tb2RhbF9fb3Blbk5hbWVcIikuY3NzKCdib3gtc2hhZG93JywgJ25vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBob25lID09ICcnKSB7XHJcbiAgICAgICAgICAgICQoXCIuZm9vdGVyX19Cb3hEYXRlUGhvbmUsIC5tb2RhbF9fb3BlblBob25lXCIpLmNzcygnYmFja2dyb3VuZCcsICcjZmY5OTk5Jyk7XHJcbiAgICAgICAgICAgICQoXCIuZm9vdGVyX19Cb3hEYXRlUGhvbmUsIC5tb2RhbF9fb3BlblBob25lXCIpLmNzcygnYm94LXNoYWRvdycsICcwIDAgNXB4IDNweCAjZmYzMzMzJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIi5mb290ZXJfX0JveERhdGVQaG9uZSwgLm1vZGFsX19vcGVuUGhvbmVcIikuY3NzKCdiYWNrZ3JvdW5kJywgJ25vbmUnKTtcclxuICAgICAgICAgICAgJChcIi5mb290ZXJfX0JveERhdGVQaG9uZSwgLm1vZGFsX19vcGVuUGhvbmVcIikuY3NzKCdib3gtc2hhZG93JywgJ25vbmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuYW1lICYmIHBob25lKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeS5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogXCJhc3NldHMvcGhwL21haWwucGhwXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyX25hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9waG9uZTogcGhvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9lbWFpbDogZW1haWxCb3R0b20sXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcl90ZXh0OiB0ZXh0Qm90dG9tXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLlllcyA9PSAneWVzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlUHVzaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICAvLyBFbmQgSlNPTlxyXG4gICAgLy8rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKytcclxuICAgIC8vIE9wZW4gTW9kYWxcclxuICAgICQoXCIub3Blbl9fbW9kYWxcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIi5vdmVybGF5XCIpLmNzcyh7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiLm1vZGFsXCIpLmNzcyh7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiLm1vZGFsXCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBsZWZ0OiAnNTAlJ1xyXG4gICAgICAgIH0sIDUwMClcclxuICAgIH0pO1xyXG4gICAgJChcIi5vdmVybGF5LCAubW9kYWxfX2Nsb3NlXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoXCIubW9kYWxcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIGxlZnQ6ICcxMjAlJ1xyXG4gICAgICAgIH0sIDUwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoXCIubW9kYWxcIikuY3NzKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcIi5vdmVybGF5XCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKG1lc3NhZ2VQdXNoKSB7XHJcbiAgICAgICAgJChcIi5tb2RhbF9fb3BlbiwgLmJvdHRvbUZvcm1cIikuZmFkZU91dCg2MDAsIGRpc3BsYXlUaGFua3NQYWdlKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZGlzcGxheVRoYW5rc1BhZ2UoKSB7XHJcbiAgICAgICAgICAgICQoXCIubW9kYWxfX29wZW4sIC5ib3R0b21Gb3JtLCAuZm9vdGVyX190aXRsZVwiKS5jc3MoXHJcbiAgICAgICAgICAgICAgICAnZGlzcGxheScsICdub25lJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAkKFwiLnRoYW5rc1BhZ2VcIikuY3NzKFxyXG4gICAgICAgICAgICAgICAgJ2Rpc3BsYXknLCAnZmxleCdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEVuZCBPcGVuIE1vZGFsXHJcbiAgICAvLysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK1xyXG4gICAgLy8gT3BlbiBNZW51XHJcbiAgICAkKFwiLmhlYWRlcl9fcGhvbmVNZW51XCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG9wZW5NZW51ID8gaGVpZ2h0TWVudSA9ICcyNzBweCcgOiBoZWlnaHRNZW51ID0gJzYwcHgnO1xyXG4gICAgICAgIG9wZW5NZW51ID8gZGlzcGxheU1lbnUgPSAnZmxleCcgOiBkaXNwbGF5TWVudSA9ICdub25lJztcclxuICAgICAgICBvcGVuTWVudSA/ICQoXCIuaGVhZGVyX19waG9uZU1lbnVcIikuYWRkQ2xhc3MoJ2FjdGl2ZScpIDogJChcIi5oZWFkZXJfX3Bob25lTWVudVwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJChcIi5oZWFkZXJcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0TWVudVxyXG4gICAgICAgIH0sIDUwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoXCIuaGVhZGVyX19tZW51XCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBkaXNwbGF5TWVudVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb3Blbk1lbnUgPSAhb3Blbk1lbnU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBFbmQgT3BlbiBNZW51XHJcbiAgICAvLysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK1xyXG4gICAgLy8gU2xpZGVyXHJcbiAgICAkKCcuc2VjdGlvbl9fZm91cnRoR2FsbGVyeScpLm93bENhcm91c2VsKHtcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogMzAwMCxcclxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXHJcbiAgICAgICAgc21hcnRTcGVlZDogMzAwLFxyXG4gICAgICAgIG1hcmdpbjogMjAsXHJcbiAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAzNjA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDM4MDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNDIwOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJCgnLnNlY3Rpb25fX3NpeHRoQm94Jykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiAzMDAwLFxyXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICAgICAgICBzbWFydFNwZWVkOiAzMDAsXHJcbiAgICAgICAgbWFyZ2luOiAyMCxcclxuICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEVuZCBTbGlkZXJcclxuICAgIC8vKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrXHJcbiAgICAvLyBNYXNrIGlucHV0XHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoXCIubW9kYWxfX29wZW5QaG9uZVwiKS5tYXNrKFwiKzcoOTk5KSA5OTktOTktOTlcIik7XHJcbiAgICAgICAgJChcIi5mb290ZXJfX0JveERhdGVQaG9uZVwiKS5tYXNrKFwiKzcoOTk5KSA5OTktOTktOTlcIik7XHJcbiAgICB9KTtcclxuICAgIC8vIEVuZCBNYXNrIGlucHV0XHJcbiAgICAvLysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK1xyXG4gICAgLy8gSGVhZGVyIHNoYWRvd1xyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMCkge1xyXG4gICAgICAgICAgICAkKFwiLmhlYWRlclwiKS5jc3MoJ2JveC1zaGFkb3cnLCAnMCAwIDIwcHggMCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgJChcIi5oZWFkZXJcIikuY3NzKCdib3gtc2hhZG93JywgJ25vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIEVuZGhlYWRlciBzaGFkb3dcclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
