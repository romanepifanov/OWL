$(document).ready(function() {
    $(".open__modal").click(function() {
        console.log('hi');
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
});