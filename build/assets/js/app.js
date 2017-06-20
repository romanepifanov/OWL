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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIC8vIE9wZW4gTW9kYWxcclxuICAgICQoXCIub3Blbl9fbW9kYWxcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIi5vdmVybGF5XCIpLmNzcyh7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiLm1vZGFsXCIpLmNzcyh7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiLm1vZGFsXCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBsZWZ0OiAnNTAlJ1xyXG4gICAgICAgIH0sIDUwMClcclxuICAgIH0pO1xyXG4gICAgJChcIi5vdmVybGF5LCAubW9kYWxfX29wZW5CdXR0b25cIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIi5tb2RhbFwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgbGVmdDogJzEyMCUnXHJcbiAgICAgICAgfSwgNTAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJChcIi5tb2RhbFwiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIub3ZlcmxheVwiKS5jc3Moe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy8gRW5kIE9wZW4gTW9kYWxcclxuICAgIC8vKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrXHJcbiAgICAvLyBPcGVuIE1lbnVcclxuICAgIHZhciBvcGVuTWVudSA9IHRydWVcclxuICAgIHZhciBoZWlnaHRNZW51LCBkaXNwbGF5TWVudSwgbmV3U291cmNlO1xyXG4gICAgJChcIi5oZWFkZXJfX3Bob25lTWVudVwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBvcGVuTWVudSA/IGhlaWdodE1lbnUgPSAnMjQ1cHgnIDogaGVpZ2h0TWVudSA9ICc2MHB4JztcclxuICAgICAgICBvcGVuTWVudSA/IGRpc3BsYXlNZW51ID0gJ2ZsZXgnIDogZGlzcGxheU1lbnUgPSAnbm9uZSc7XHJcbiAgICAgICAgb3Blbk1lbnUgPyBuZXdTb3VyY2UgPSAnYXNzZXRzL2ltZy9oZWFkZXIvbWVudV9fbW9iaWxlX19jbG9zZS5wbmcnIDogbmV3U291cmNlID0gJ2Fzc2V0cy9pbWcvaGVhZGVyL21lbnVfX21vYmlsZS5wbmcnO1xyXG4gICAgICAgICQoXCIuaGVhZGVyXCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodE1lbnVcclxuICAgICAgICB9LCA1MDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKFwiLmhlYWRlcl9fbWVudVwiKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZGlzcGxheU1lbnVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoXCIuaGVhZGVyX19waG9uZU1lbnVQaG90b1wiKS5hdHRyKCdzcmMnLCBuZXdTb3VyY2UpO1xyXG5cclxuICAgICAgICAgICAgb3Blbk1lbnUgPSAhb3Blbk1lbnU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBFbmQgT3BlbiBNZW51XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
