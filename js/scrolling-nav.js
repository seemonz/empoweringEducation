//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // dropdown logic
    $('li.dropdown-parents').on('click', function() {
        if ($('.answer > p', this).hasClass('dropdown-hidden')) {
            $('.answer > p', this).addClass('dropdown-visible').removeClass('dropdown-hidden');
        } else {
            $('.answer > p', this).addClass('dropdown-hidden').removeClass('dropdown-visible');
        }
    });

});
