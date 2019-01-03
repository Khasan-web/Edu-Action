$(document).ready(function () {

    $('.link-logo').mouseover(function () {
        $('.link-logo').css('opacity', '0.4');
        $(this).css('opacity', '1')
    });
    $('.link-logo').mouseout(function () {
        $('.link-logo').css('opacity', '1');
    });

    function hideMainLogo() {
        $('.main-logo').addClass('move-bottom');
    }

    function showMainLogo() {
        $('.main-logo').removeClass('move-bottom');
    }

    function hideAllInfo() {
        $('.info-item').removeClass('show');
        $('.info-item').hide();
    }


    $('.edu-expo').click(function () {
        hideMainLogo();
        hideAllInfo();
        $('.edu-expo-info').show(function () {
            $('.edu-expo-info').addClass('show');
            setTimeout(() => {
                if ($(window).width() <= 768) {
                    $("html, body").animate({
                        scrollTop: 1000
                    }, 600);
                }
            }, 50);
        });
    });

    $('.study-abroad').click(function () {
        hideMainLogo();
        hideAllInfo();
        $('.study-abroad-info').show(function () {
            $('.study-abroad-info').addClass('show');
            setTimeout(() => {
                if ($(window).width() <= 768) {
                    $("html, body").animate({
                        scrollTop: 1000
                    }, 600);
                }
            }, 50);
        });
    });

    $('.ielts').click(function () {
        hideMainLogo();
        hideAllInfo();
        $('.ielts-info').show(function () {
            $('.ielts-info').addClass('show');
            setTimeout(() => {
                if ($(window).width() <= 768) {
                    $("html, body").animate({
                        scrollTop: 1000
                    }, 600);
                }
            }, 50);
        });
    });

    $('.celta').click(function () {
        hideMainLogo();
        hideAllInfo();
        $('.celta-info').show(function () {
            $('.celta-info').addClass('show');
            setTimeout(() => {
                if ($(window).width() <= 768) {
                    $("html, body").animate({
                        scrollTop: 1000
                    }, 600);
                }
            }, 50);
        });
    });

    $('.cambridge').click(function () {
        hideMainLogo();
        hideAllInfo();
        $('.cambridge-info').show(function () {
            $('.cambridge-info').addClass('show');
            setTimeout(() => {
                if ($(window).width() <= 768) {
                    $("html, body").animate({
                        scrollTop: 1000
                    }, 600);
                }
            }, 50);
        });
    });

    $('.close-info').click(function () {
        $('.info-item').removeClass('show');
        setTimeout(() => {
            $('.info-item').hide();
        }, 500);
        showMainLogo();
    });

    if ($(window).width() <= 992) {

        $('.ielts').removeClass('mx-auto');
        $('.edu-expo').removeClass('mx-auto');

        $('.celta').removeClass('mx-auto');
        $('.celta').addClass('ml-auto');

        $('.cambridge').removeClass('mx-auto');
        $('.cambridge').addClass('ml-auto');

    }

    if ($(window).width() <= 768) {

        $('.link-logo').removeClass('mx-auto');
        $('.link-logo').removeClass('mr-auto');
        $('.link-logo').removeClass('ml-auto');
        $('.cambridge').removeClass('ml-auto');
        $('.cambridge').addClass('mx-auto');

        $('.logo-mobi-item').click(function () {
            $(window).animate({
                scrollTop: 100
            }, 600);
        });

    }

});