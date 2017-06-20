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
    $(".overlay, .modal__openButton").click(function() {
        $(".modal").animate({
            left: '120%'
        }, 500, function() {
            $(".modal").css({
                display: 'none'
            });
        });
        $(".overlay").css({
            display: 'none'
        });
    });
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
});