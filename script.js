 $(document).ready(function(){
            
            $(window).scroll(function() {
                headerHeight = $("header").outerHeight();
                w = $(window);               
                if (($(document).scrollTop() > w.height() - headerHeight + 1) && ($(document).scrollTop() < w.height() + headerHeight + $("#about").height() + 1) )
                
                {
                    $("nav").addClass("black");
                    $("header").addClass("black");
                    $("nav > a").css({
                        backgroundColor: "#1a1a1a",
                        color: "#ffffff"
                    });      
                } else 
                {
                    $("nav").removeClass("black");
                    $("header").removeClass("black");
                    $("nav > a").css({
                        backgroundColor: "#ffffff",
                        color: "#000000"
                    });
                }
            });
            
            
            $("main").css("margin-bottom", function(){
                          return $(window).height() * 0.6;
                          })
            
            
            $(".navigation").hover(
                function(){
                    $(this).addClass("red");
                },
                function(){
                    $(this).removeClass("red");
                }
            );
            
            
            
            
            
        });
