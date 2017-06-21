$(document).ready(function() {
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
    var messagePush = false;
    $(".messagePush").click(function() {
        messagePush = true;
        if (messagePush) {
            $(".modal__open, .bottomForm").fadeOut(600, displayThanksPage)

            // $(".thanksPage").fadeIn(600);

            function displayThanksPage() {
                $(".modal__open, .bottomForm").css(
                    'display', 'none'
                );
                $(".thanksPage").css(
                    'display', 'flex'
                );
            }
        }
    })

    // End Open Modal
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Open Menu
    var openMenu = true
    var heightMenu, displayMenu, newSource;
    $(".header__phoneMenu").click(function() {
        openMenu ? heightMenu = '245px' : heightMenu = '60px';
        openMenu ? displayMenu = 'flex' : displayMenu = 'none';
        openMenu ? newSource = 'assets/img/header/menu__mobile__close.png' : newSource = 'assets/img/header/menu__mobile.png';
        $(".header").animate({
            height: heightMenu
        }, 500, function() {
            $(".header__menu").css({
                display: displayMenu
            });
            $(".header__phoneMenuPhoto").attr('src', newSource);

            openMenu = !openMenu;
        })

    });

    // End Open Menu
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Slider
    var slideCount = $(".carusel__box").children().length;
    var widthItem = $(".carusel__item").width() + 10;
    var slideInterval = 0;

    function nextSlide() {
        slideInterval = slideInterval + (slideInterval * -1);
        $(".carusel__box").animate({
            transform: 'translateX(' + slideInterval + 'px)'
        }, 500);
    }
    setTimeout(nextSlide, 500);


    // End Slider
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIC8vIE9wZW4gTW9kYWxcclxuICAgICQoXCIub3Blbl9fbW9kYWxcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIi5vdmVybGF5XCIpLmNzcyh7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiLm1vZGFsXCIpLmNzcyh7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiLm1vZGFsXCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBsZWZ0OiAnNTAlJ1xyXG4gICAgICAgIH0sIDUwMClcclxuICAgIH0pO1xyXG4gICAgJChcIi5vdmVybGF5LCAubW9kYWxfX2Nsb3NlXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoXCIubW9kYWxcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIGxlZnQ6ICcxMjAlJ1xyXG4gICAgICAgIH0sIDUwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoXCIubW9kYWxcIikuY3NzKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcIi5vdmVybGF5XCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcbiAgICB2YXIgbWVzc2FnZVB1c2ggPSBmYWxzZTtcclxuICAgICQoXCIubWVzc2FnZVB1c2hcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbWVzc2FnZVB1c2ggPSB0cnVlO1xyXG4gICAgICAgIGlmIChtZXNzYWdlUHVzaCkge1xyXG4gICAgICAgICAgICAkKFwiLm1vZGFsX19vcGVuLCAuYm90dG9tRm9ybVwiKS5mYWRlT3V0KDYwMCwgZGlzcGxheVRoYW5rc1BhZ2UpXHJcblxyXG4gICAgICAgICAgICAvLyAkKFwiLnRoYW5rc1BhZ2VcIikuZmFkZUluKDYwMCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkaXNwbGF5VGhhbmtzUGFnZSgpIHtcclxuICAgICAgICAgICAgICAgICQoXCIubW9kYWxfX29wZW4sIC5ib3R0b21Gb3JtXCIpLmNzcyhcclxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheScsICdub25lJ1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICQoXCIudGhhbmtzUGFnZVwiKS5jc3MoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknLCAnZmxleCdcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIEVuZCBPcGVuIE1vZGFsXHJcbiAgICAvLysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK1xyXG4gICAgLy8gT3BlbiBNZW51XHJcbiAgICB2YXIgb3Blbk1lbnUgPSB0cnVlXHJcbiAgICB2YXIgaGVpZ2h0TWVudSwgZGlzcGxheU1lbnUsIG5ld1NvdXJjZTtcclxuICAgICQoXCIuaGVhZGVyX19waG9uZU1lbnVcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgb3Blbk1lbnUgPyBoZWlnaHRNZW51ID0gJzI0NXB4JyA6IGhlaWdodE1lbnUgPSAnNjBweCc7XHJcbiAgICAgICAgb3Blbk1lbnUgPyBkaXNwbGF5TWVudSA9ICdmbGV4JyA6IGRpc3BsYXlNZW51ID0gJ25vbmUnO1xyXG4gICAgICAgIG9wZW5NZW51ID8gbmV3U291cmNlID0gJ2Fzc2V0cy9pbWcvaGVhZGVyL21lbnVfX21vYmlsZV9fY2xvc2UucG5nJyA6IG5ld1NvdXJjZSA9ICdhc3NldHMvaW1nL2hlYWRlci9tZW51X19tb2JpbGUucG5nJztcclxuICAgICAgICAkKFwiLmhlYWRlclwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRNZW51XHJcbiAgICAgICAgfSwgNTAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJChcIi5oZWFkZXJfX21lbnVcIikuY3NzKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGRpc3BsYXlNZW51XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiLmhlYWRlcl9fcGhvbmVNZW51UGhvdG9cIikuYXR0cignc3JjJywgbmV3U291cmNlKTtcclxuXHJcbiAgICAgICAgICAgIG9wZW5NZW51ID0gIW9wZW5NZW51O1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRW5kIE9wZW4gTWVudVxyXG4gICAgLy8rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKytcclxuICAgIC8vIFNsaWRlclxyXG4gICAgdmFyIHNsaWRlQ291bnQgPSAkKFwiLmNhcnVzZWxfX2JveFwiKS5jaGlsZHJlbigpLmxlbmd0aDtcclxuICAgIHZhciB3aWR0aEl0ZW0gPSAkKFwiLmNhcnVzZWxfX2l0ZW1cIikud2lkdGgoKSArIDEwO1xyXG4gICAgdmFyIHNsaWRlSW50ZXJ2YWwgPSAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIG5leHRTbGlkZSgpIHtcclxuICAgICAgICBzbGlkZUludGVydmFsID0gc2xpZGVJbnRlcnZhbCArIChzbGlkZUludGVydmFsICogLTEpO1xyXG4gICAgICAgICQoXCIuY2FydXNlbF9fYm94XCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKCcgKyBzbGlkZUludGVydmFsICsgJ3B4KSdcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dChuZXh0U2xpZGUsIDUwMCk7XHJcblxyXG5cclxuICAgIC8vIEVuZCBTbGlkZXJcclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
