$(document).ready(function() {


    setInterval(function() {
        var currentImg = $('.active');
        var nextImg = currentImg.next();
        if (!nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            $('.first').addClass('active').css('z-index', 10);
        }
        if (nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    }, 5000);
    $('.next').on('click', function() {
        var currentImg = $('.active');
        var nextImg = currentImg.next();
        if (!nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            $('.first').addClass('active').css('z-index', 10);
        }
        if (nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });
    $('.prev').on('click', function() {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();
        if (!prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            $('.last').addClass('active').css('z-index', 10);
        }

        if (prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });

    $('#projectbtn').on('click', function() {
        var dropdown = $('.dropdown-content');
        dropdown.addClass('show');
    });



    $('body').on('click', function(event) {
        if (!event.target.matches('#projectbtn')) {
            var dropdowns = $(".dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    });

    function isInView(el) {
        var rect = el.getBoundingClientRect(); // absolute position of video element
        return !(rect.top > $(window).height() || rect.bottom < 0); // visible?
    }

    $(document).on("scroll", function() {
        $("video").each(function() {
            if (isInView($(this)[0])) { // visible?
                if ($(this)[0].paused) {
                    console.log(play);
                    // $(this)[0].play();
                } // play if not playing
            } else {
                if (!$(this)[0].paused) $(this)[0].pause(); // pause if not paused
            }
        });
    });





});

function extendFunction(i) {
    var dots = $("#dots" + i);
    var moreText = $("#more" + i);
    var btnText = $("#readmore" + i);

    dots.toggle();
    moreText.toggle();
    if (btnText.html() == "Read more") {
        btnText.html("Collapse");
    } else {
        btnText.html("Read more")
    }
}