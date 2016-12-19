$(document).ready(function(){
     
    //changing styling of navigation bar, depends on scroll
    $(window).scroll(function() {
        headerHeight = $("header").height();
        w = $(window);               
        if (($(document).scrollTop() > -headerHeight + $("#home").outerHeight() + 1) &&
            ($(document).scrollTop() <= -headerHeight + $("#home").outerHeight() + $("#about").outerHeight() + 1))

        {
            $("nav").addClass("black");
            $("header").addClass("black");
            $("nav > a").css({
                backgroundColor: "#1a1a1a",
                color: "#ffffff"
            });      
        } else {
            $("nav").removeClass("black");
            $("header").removeClass("black");
            $("nav > a").css({
                backgroundColor: "#ffffff",
                color: "#000000"
            });
        }   
    });

    //"scrollspy" effect - let's user know, where he is
    $(window).scroll(function() {
        headerHeight = $("header").height();
        w = $(window);
            if ($(document).scrollTop() <= -headerHeight + $("#home").outerHeight() + 1) {
            $("a[href*='#']").removeClass("hovered");
            $("a[href='#home']").addClass("hovered"); 
        }
        else if (($(document).scrollTop() > -headerHeight + $("#home").outerHeight() + 1) && 
                 ($(document).scrollTop() <= -headerHeight + $("#home").outerHeight() + $("#about").outerHeight() + 1))  {
            $("a[href*='#']").removeClass("hovered");
            $("a[href='#about']").addClass("hovered"); 
        }
        else if (($(document).scrollTop() > -headerHeight + $("#home").outerHeight() + $("#about").outerHeight() + 1) &&
                 ($(document).scrollTop() < headerHeight + $("main").outerHeight() - $(window).height()*0.6))  {
            $("a[href*='#']").removeClass("hovered");
            $("a[href='#portfolio']").addClass("hovered"); 
        }
        else if ($(document).scrollTop() > headerHeight + $("main").height() - $(window).height()*0.6)  {
            $("a[href*='#']").removeClass("hovered");
            $("a[href='#information']").addClass("hovered"); 
        }
    })
    
    
    //opening footer with contacts section
    $("main").css("margin-bottom", function(){
                  return $(window).height() * 0.6;
                  })

    
    //hover effect for navigation bar
    $(".navigation").hover(
        function(){
            $(this).addClass("hovered");
        },
        function(){
            $(this).removeClass("hovered");
        }
    );
    
    
    
    //smooth scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            
            if (target.length) {
                target = target;
            } else {
                target = $('[name="' + this.hash.slice(1) + '"]');
            }
            
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    
    
            
});

