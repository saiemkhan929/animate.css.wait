jQuery(document).ready(function($){




//animation only show when we are closer

$(window).on('scroll', function(e) {

	
	 console.log(e);

	var mainCord = document.documentElement.scrollTop || document.body.scrollTop;
	/* Act on the event */
	

	$('.sk_delayer').each(function(index, el) {
		
		var gotIt = $(this).offset().top-580;
		

		if(gotIt < mainCord){
		
			var myClasses = $(this).attr('data-animated');
			$(this).addClass(myClasses);
		
		
		}

	});


	
});


});
