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