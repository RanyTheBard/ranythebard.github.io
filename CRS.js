$(".carousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});

$(function () {
    var $element = $('.carousel-control-prev-icon');
    setInterval(function () {
        $element.fadeIn(1000, function () {
            $element.fadeOut(1500, function () {
                $element.fadeIn(1500)
            });
        });
    }, 5000);
});

$(function () {
    var $element = $('.carousel-control-next-icon');
    setInterval(function () {
        $element.fadeIn(1000, function () {
            $element.fadeOut(1500, function () {
                $element.fadeIn(1500)
            });
        });
    }, 5000);
});