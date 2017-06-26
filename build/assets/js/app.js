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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIG1lc3NhZ2VQdXNoID0gZmFsc2U7XHJcbiAgICB2YXIgb3Blbk1lbnUgPSB0cnVlXHJcbiAgICB2YXIgaGVpZ2h0TWVudSwgZGlzcGxheU1lbnUsIG5ld0NsYXNzO1xyXG4gICAgdmFyIHN0ciwgbmFtZSwgcGhvbmUsIGVtYWlsQm90dG9tLCB0ZXh0Qm90dG9tID0gJyc7XHJcbiAgICAvLyBKU09OXHJcbiAgICAkKFwiLm1lc3NhZ2VQdXNoXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBuYW1lID0gJChcIi5tb2RhbF9fb3Blbk5hbWVcIikudmFsKCk7XHJcbiAgICAgICAgcGhvbmUgPSAkKFwiLm1vZGFsX19vcGVuUGhvbmVcIikudmFsKCk7XHJcblxyXG4gICAgICAgIG5hbWUgPSBuYW1lICsgJChcIi5mb290ZXJfX0JveERhdGVOYW1lXCIpLnZhbCgpO1xyXG4gICAgICAgIHBob25lID0gcGhvbmUgKyAkKFwiLmZvb3Rlcl9fQm94RGF0ZVBob25lXCIpLnZhbCgpO1xyXG4gICAgICAgIGVtYWlsQm90dG9tID0gJChcIi5mb290ZXJfX0JveERhdGVFbWFpbFwiKS52YWwoKTtcclxuICAgICAgICB0ZXh0Qm90dG9tID0gJChcIi5mb290ZXJfX0JveFRleHRcIikudmFsKCk7XHJcblxyXG4gICAgICAgIGlmIChuYW1lID09ICcnKSB7XHJcbiAgICAgICAgICAgICQoXCIuZm9vdGVyX19Cb3hEYXRlTmFtZSwgLm1vZGFsX19vcGVuTmFtZVwiKS5jc3MoJ2JhY2tncm91bmQnLCAnI2ZmOTk5OScpO1xyXG4gICAgICAgICAgICAkKFwiLmZvb3Rlcl9fQm94RGF0ZU5hbWUsIC5tb2RhbF9fb3Blbk5hbWVcIikuY3NzKCdib3gtc2hhZG93JywgJzAgMCA1cHggM3B4ICNmZjMzMzMnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiLmZvb3Rlcl9fQm94RGF0ZU5hbWUsIC5tb2RhbF9fb3Blbk5hbWVcIikuY3NzKCdiYWNrZ3JvdW5kJywgJ25vbmUnKTtcclxuICAgICAgICAgICAgJChcIi5mb290ZXJfX0JveERhdGVOYW1lLCAubW9kYWxfX29wZW5OYW1lXCIpLmNzcygnYm94LXNoYWRvdycsICdub25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwaG9uZSA9PSAnJykge1xyXG4gICAgICAgICAgICAkKFwiLmZvb3Rlcl9fQm94RGF0ZVBob25lLCAubW9kYWxfX29wZW5QaG9uZVwiKS5jc3MoJ2JhY2tncm91bmQnLCAnI2ZmOTk5OScpO1xyXG4gICAgICAgICAgICAkKFwiLmZvb3Rlcl9fQm94RGF0ZVBob25lLCAubW9kYWxfX29wZW5QaG9uZVwiKS5jc3MoJ2JveC1zaGFkb3cnLCAnMCAwIDVweCAzcHggI2ZmMzMzMycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIuZm9vdGVyX19Cb3hEYXRlUGhvbmUsIC5tb2RhbF9fb3BlblBob25lXCIpLmNzcygnYmFja2dyb3VuZCcsICdub25lJyk7XHJcbiAgICAgICAgICAgICQoXCIuZm9vdGVyX19Cb3hEYXRlUGhvbmUsIC5tb2RhbF9fb3BlblBob25lXCIpLmNzcygnYm94LXNoYWRvdycsICdub25lJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmFtZSAmJiBwaG9uZSkge1xyXG4gICAgICAgICAgICBqUXVlcnkuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiYXNzZXRzL3BocC9tYWlsLnBocFwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJKU09OXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9uYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfcGhvbmU6IHBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfZW1haWw6IGVtYWlsQm90dG9tLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfdGV4dDogdGV4dEJvdHRvbVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ZZXMgPT0gJ3llcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVB1c2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgLy8gRW5kIEpTT05cclxuICAgIC8vKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrXHJcbiAgICAvLyBPcGVuIE1vZGFsXHJcbiAgICAkKFwiLm9wZW5fX21vZGFsXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoXCIub3ZlcmxheVwiKS5jc3Moe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIi5tb2RhbFwiKS5jc3Moe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIi5tb2RhbFwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgbGVmdDogJzUwJSdcclxuICAgICAgICB9LCA1MDApXHJcbiAgICB9KTtcclxuICAgICQoXCIub3ZlcmxheSwgLm1vZGFsX19jbG9zZVwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKFwiLm1vZGFsXCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBsZWZ0OiAnMTIwJSdcclxuICAgICAgICB9LCA1MDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKFwiLm1vZGFsXCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoXCIub3ZlcmxheVwiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChtZXNzYWdlUHVzaCkge1xyXG4gICAgICAgICQoXCIubW9kYWxfX29wZW4sIC5ib3R0b21Gb3JtXCIpLmZhZGVPdXQoNjAwLCBkaXNwbGF5VGhhbmtzUGFnZSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRpc3BsYXlUaGFua3NQYWdlKCkge1xyXG4gICAgICAgICAgICAkKFwiLm1vZGFsX19vcGVuLCAuYm90dG9tRm9ybSwgLmZvb3Rlcl9fdGl0bGVcIikuY3NzKFxyXG4gICAgICAgICAgICAgICAgJ2Rpc3BsYXknLCAnbm9uZSdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgJChcIi50aGFua3NQYWdlXCIpLmNzcyhcclxuICAgICAgICAgICAgICAgICdkaXNwbGF5JywgJ2ZsZXgnXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBFbmQgT3BlbiBNb2RhbFxyXG4gICAgLy8rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKytcclxuICAgIC8vIE9wZW4gTWVudVxyXG4gICAgJChcIi5oZWFkZXJfX3Bob25lTWVudVwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBvcGVuTWVudSA/IGhlaWdodE1lbnUgPSAnMjcwcHgnIDogaGVpZ2h0TWVudSA9ICc2MHB4JztcclxuICAgICAgICBvcGVuTWVudSA/IGRpc3BsYXlNZW51ID0gJ2ZsZXgnIDogZGlzcGxheU1lbnUgPSAnbm9uZSc7XHJcbiAgICAgICAgb3Blbk1lbnUgPyAkKFwiLmhlYWRlcl9fcGhvbmVNZW51XCIpLmFkZENsYXNzKCdhY3RpdmUnKSA6ICQoXCIuaGVhZGVyX19waG9uZU1lbnVcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoXCIuaGVhZGVyXCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodE1lbnVcclxuICAgICAgICB9LCA1MDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKFwiLmhlYWRlcl9fbWVudVwiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZGlzcGxheU1lbnVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG9wZW5NZW51ID0gIW9wZW5NZW51O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRW5kIE9wZW4gTWVudVxyXG4gICAgLy8rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKytcclxuICAgIC8vIFNsaWRlclxyXG4gICAgJCgnLnNlY3Rpb25fX2ZvdXJ0aEdhbGxlcnknKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDMwMDAsXHJcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDMwMCxcclxuICAgICAgICBtYXJnaW46IDIwLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMzYwOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAzODA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDQyMDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiA0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoJy5zZWN0aW9uX19zaXh0aEJveCcpLm93bENhcm91c2VsKHtcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5VGltZW91dDogMzAwMCxcclxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXHJcbiAgICAgICAgc21hcnRTcGVlZDogMzAwLFxyXG4gICAgICAgIG1hcmdpbjogMjAsXHJcbiAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBFbmQgU2xpZGVyXHJcbiAgICAvLysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK1xyXG4gICAgLy8gTWFzayBpbnB1dFxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKFwiLm1vZGFsX19vcGVuUGhvbmVcIikubWFzayhcIis3KDk5OSkgOTk5LTk5LTk5XCIpO1xyXG4gICAgICAgICQoXCIuZm9vdGVyX19Cb3hEYXRlUGhvbmVcIikubWFzayhcIis3KDk5OSkgOTk5LTk5LTk5XCIpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBFbmQgTWFzayBpbnB1dFxyXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
