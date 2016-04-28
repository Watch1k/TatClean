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

	// new WOW().init();
	
});