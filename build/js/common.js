head.ready(function(){

	// Clear placeholder
	(function() {
		$('input,textarea').focus(function(){
				$(this).data('placeholder',$(this).attr('placeholder'))
				$(this).attr('placeholder','');
		});
		$('input,textarea').blur(function(){
			$(this).attr('placeholder',$(this).data('placeholder'));
		});
	}());

	$('.slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><i class="icon icon-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="icon icon-right"></i></button>',
		autoplay: true,
		autoplaySpeed: 10000
	});

	$('.slider-com').slick({
		dots: true,
		arrows: false,
		slidesToShow: 3,
		slideToScroll: 1,
		centerMode: true,
		centerPadding: 0,
		autoplay: true,
		autoplaySpeed: 10000,
		focusOnSelect: true
	});
	
	// Counter
	(function(){
		$(window).load(function () {
			$(".counter__value").each(function(index){
				var counter = $(this),
						counterNow = new Date(),
						counterDate = new Date(2016,6 - 1,25,18,50), // год, месяц (-1 маст хев), день, минута, секунда
						counterValue = Math.round((counterDate - counterNow) / 1000);
				counter.countdown({
					seconds: counterValue,
					callback:function(days,hours,minutes,seconds,total){
						days = (days) ? ((days<10)?"0"+days:days)+" : " : "00:";
						hours = (hours) ? ((hours<10)?"0"+hours:hours)+" : " : "00:";
						minutes = (minutes) ? ((minutes<10)?"0"+minutes:minutes)+" : " : "00:";
						seconds = (seconds) ? ((seconds<10)?"0"+seconds:seconds) : "00";
						counter.html(days+hours+minutes+seconds);
					},
					finished: function(){
						// your code here
					}
				});
			});
		});
	}());

	// Ajax Form
	(function () {
		$('.form-auction').submit(function (e) {
			e.preventDefault();
			var _this = $(this),
					post_data = _this.serialize();

			//Ajax post data to server
			$.post('mail.php', post_data, function(response){
				if (response.type == 'error'){
					// your code here
				} else {
					// your code here
					_this.find('.popup__help').slideDown();
					setTimeout(function () {
						_this.find('.popup__help').slideUp();
						_this.trigger('reset');
					},5000);
				}
			}, 'json');
		});
	}());

});