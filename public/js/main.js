$(document).ready(function() {
    var scrollifyOptions = {
        section: ".panel",
        //sectionName:false,
        scrollSpeed: 1100,
        setHeights: true,
        overflowScroll: true,
        touchScroll: true,
    };
    $.scrollify(scrollifyOptions);



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

    $('#projectbtn').on('click', function(){
        var dropdown = $('.dropdown-content');
        dropdown.addClass('show');
    });

    $('body').on('click', function(event){
        if(!event.target.matches('#projectbtn')){
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

    
    // function myFunction() {
    //     document.getElementById("myDropdown").classList.toggle("show");
    //   }
      
    //   // Close the dropdown menu if the user clicks outside of it
    //   window.onclick = function(event) {
    //     if (!event.target.matches('.dropbtn')) {
    //       var dropdowns = document.getElementsByClassName("dropdown-content");
    //       var i;
    //       for (i = 0; i < dropdowns.length; i++) {
    //         var openDropdown = dropdowns[i];
    //         if (openDropdown.classList.contains('show')) {
    //           openDropdown.classList.remove('show');
    //         }
    //       }
    //     }
    //   }


});