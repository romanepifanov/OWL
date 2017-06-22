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
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Mask input
    $(function() {
        $(".modal__openPhone").mask("+7(999) 999-99-99");
        $(".footer__BoxDatePhone").mask("+7(999) 999-99-99");
    });
    // End Mask input
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gT3BlbiBNb2RhbFxyXG4gICAgJChcIi5vcGVuX19tb2RhbFwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKFwiLm92ZXJsYXlcIikuY3NzKHtcclxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIubW9kYWxcIikuY3NzKHtcclxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIubW9kYWxcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIGxlZnQ6ICc1MCUnXHJcbiAgICAgICAgfSwgNTAwKVxyXG4gICAgfSk7XHJcbiAgICAkKFwiLm92ZXJsYXksIC5tb2RhbF9fY2xvc2VcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIi5tb2RhbFwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgbGVmdDogJzEyMCUnXHJcbiAgICAgICAgfSwgNTAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJChcIi5tb2RhbFwiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiLm92ZXJsYXlcIikuY3NzKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuICAgIHZhciBtZXNzYWdlUHVzaCA9IGZhbHNlO1xyXG4gICAgJChcIi5tZXNzYWdlUHVzaFwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBtZXNzYWdlUHVzaCA9IHRydWU7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VQdXNoKSB7XHJcbiAgICAgICAgICAgICQoXCIubW9kYWxfX29wZW4sIC5ib3R0b21Gb3JtXCIpLmZhZGVPdXQoNjAwLCBkaXNwbGF5VGhhbmtzUGFnZSlcclxuXHJcbiAgICAgICAgICAgIC8vICQoXCIudGhhbmtzUGFnZVwiKS5mYWRlSW4oNjAwKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRpc3BsYXlUaGFua3NQYWdlKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5tb2RhbF9fb3BlbiwgLmJvdHRvbUZvcm1cIikuY3NzKFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JywgJ25vbmUnXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgJChcIi50aGFua3NQYWdlXCIpLmNzcyhcclxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheScsICdmbGV4J1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy8gRW5kIE9wZW4gTW9kYWxcclxuICAgIC8vKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrXHJcbiAgICAvLyBPcGVuIE1lbnVcclxuICAgIHZhciBvcGVuTWVudSA9IHRydWVcclxuICAgIHZhciBoZWlnaHRNZW51LCBkaXNwbGF5TWVudSwgbmV3U291cmNlO1xyXG4gICAgJChcIi5oZWFkZXJfX3Bob25lTWVudVwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBvcGVuTWVudSA/IGhlaWdodE1lbnUgPSAnMjQ1cHgnIDogaGVpZ2h0TWVudSA9ICc2MHB4JztcclxuICAgICAgICBvcGVuTWVudSA/IGRpc3BsYXlNZW51ID0gJ2ZsZXgnIDogZGlzcGxheU1lbnUgPSAnbm9uZSc7XHJcbiAgICAgICAgb3Blbk1lbnUgPyBuZXdTb3VyY2UgPSAnYXNzZXRzL2ltZy9oZWFkZXIvbWVudV9fbW9iaWxlX19jbG9zZS5wbmcnIDogbmV3U291cmNlID0gJ2Fzc2V0cy9pbWcvaGVhZGVyL21lbnVfX21vYmlsZS5wbmcnO1xyXG4gICAgICAgICQoXCIuaGVhZGVyXCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodE1lbnVcclxuICAgICAgICB9LCA1MDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKFwiLmhlYWRlcl9fbWVudVwiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZGlzcGxheU1lbnVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoXCIuaGVhZGVyX19waG9uZU1lbnVQaG90b1wiKS5hdHRyKCdzcmMnLCBuZXdTb3VyY2UpO1xyXG5cclxuICAgICAgICAgICAgb3Blbk1lbnUgPSAhb3Blbk1lbnU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBFbmQgT3BlbiBNZW51XHJcbiAgICAvLysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK1xyXG4gICAgLy8gU2xpZGVyXHJcbiAgICB2YXIgc2xpZGVDb3VudCA9ICQoXCIuY2FydXNlbF9fYm94XCIpLmNoaWxkcmVuKCkubGVuZ3RoO1xyXG4gICAgdmFyIHdpZHRoSXRlbSA9ICQoXCIuY2FydXNlbF9faXRlbVwiKS53aWR0aCgpICsgMTA7XHJcbiAgICB2YXIgc2xpZGVJbnRlcnZhbCA9IDA7XHJcblxyXG4gICAgZnVuY3Rpb24gbmV4dFNsaWRlKCkge1xyXG4gICAgICAgIHNsaWRlSW50ZXJ2YWwgPSBzbGlkZUludGVydmFsICsgKHNsaWRlSW50ZXJ2YWwgKiAtMSk7XHJcbiAgICAgICAgJChcIi5jYXJ1c2VsX19ib3hcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoJyArIHNsaWRlSW50ZXJ2YWwgKyAncHgpJ1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KG5leHRTbGlkZSwgNTAwKTtcclxuXHJcblxyXG4gICAgLy8gRW5kIFNsaWRlclxyXG4gICAgLy8rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKytcclxuICAgIC8vIE1hc2sgaW5wdXRcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIi5tb2RhbF9fb3BlblBob25lXCIpLm1hc2soXCIrNyg5OTkpIDk5OS05OS05OVwiKTtcclxuICAgICAgICAkKFwiLmZvb3Rlcl9fQm94RGF0ZVBob25lXCIpLm1hc2soXCIrNyg5OTkpIDk5OS05OS05OVwiKTtcclxuICAgIH0pO1xyXG4gICAgLy8gRW5kIE1hc2sgaW5wdXRcclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
