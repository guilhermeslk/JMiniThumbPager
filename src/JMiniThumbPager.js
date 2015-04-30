(function ( $ ) {
    var currentIndex = 0;
    var length = null;

    $.fn.JMiniThumbPager = function( options ) {
        var self = this;
        var settings = $.extend({
            prev: "Prev",
            next: "Next",
            buttonClasses: "mini-btn" 
        }, options );

        var btnPrevTmpl = "<button type='button' class='" + settings.buttonClasses + "'>" + settings.prev + "</button>";
        var btnNextTmpl = "<button type='button' class='" + settings.buttonClasses + "'>" +  settings.next + "</button>";

        length = this.find("ul").children().length;

        if(options === "getActiveImage") {	
            if(self.find("ul .active img").length > 0)
    return self.find("ul .active img").attr("src");
return "";
        } else {

            this.find("ul").children().each(function(index) {
                if(index > 0) {
                    $(this).css("display", "none");
                } else { 
                    $(this).css("display", "inline");
                    $(this).addClass("active");
                }
            });

            if(length > 1) {
                this.append("<div class='mini-controls'>" + btnPrevTmpl + btnNextTmpl + "</div>" );

                var btnPrev = this.find('.mini-controls').children().first();
                var btnNext = this.find('.mini-controls').children().last(); 

                if(currentIndex === 0) 
                    btnPrev.attr("disabled", "disabled");

                btnPrev.click(function() {
                    var activeImage = self.find("ul").children().filter(".active");

                    activeImage.css("display", "none");
                    activeImage.removeClass("active");

                    activeImage.prev().css("display", "inline");
                    activeImage.prev().addClass("active");

                    currentIndex--; 

                    if(currentIndex === 0) 
                    $(this).attr("disabled", "disabled");

                if(currentIndex < ( length - 1) ) 
                    btnNext.removeAttr("disabled");  

                });

                btnNext.click(function() {
                    var activeImage = self.find("ul").children().filter(".active");

                    activeImage.css("display", "none");
                    activeImage.removeClass("active");

                    activeImage.next().css("display", "inline");
                    activeImage.next().addClass("active");

                    currentIndex++; 

                    if(currentIndex === length - 1) 
                    $(this).attr("disabled", "disabled");

                if(currentIndex > 0) 
                    btnPrev.removeAttr("disabled");     

                });
            } else {
                if( this.find(".mini-controls").length > 0 ) {
                    this.find(".mini-controls").remove();
                }
            }
        }

        return this;
    };
}( jQuery ));
