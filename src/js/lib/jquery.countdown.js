/*!
 * countdown - jQuery Plugin
 * version: 1.0.4 (Mon, 21 Oct 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://www.articks.ru/jquery-countdown/
 *
 * Copyright 2013 Dmitry Karasev
 *
 */

(function($){
    // Seconds in day
    var days = 24*60*60;
    // Seconds in hour
    var hours = 60*60;
    // Seconds in minute
    var minutes = 60;
    // Init plugin
    $.fn.countdown = function(prop){
        var options = $.extend({
            // Callback function
            callback:function(){},
            // Function on timer end
            finished:function(){},
            // Seconds to end
            seconds:0
        },prop);
        // Left seconds
        var left = 0;
        // Each second
        (function tick(sec){
            // Current seconds to end
            sec = (!sec && sec!==0) ? options.seconds : sec;
            // Left seconds
            left = sec;
            if(left<=0) {
                // If end init finished method
                options.finished();
            }
            else {
                // Math days
                d = Math.floor(left/days);
                left -= d*days;
                // Math hours
                h = Math.floor(left/hours);
                left -= h*hours;
                // Math minutes
                m = Math.floor(left/minutes);
                left -= m*minutes;
                // Math seconds
                s = left;
                // Init callback method
                options.callback(d,h,m,s,sec);
            }
            // Set timeout to repeat operations
            setTimeout(function(){ tick(sec-1); },1000);
        })();
        return this;
    };
})(jQuery);