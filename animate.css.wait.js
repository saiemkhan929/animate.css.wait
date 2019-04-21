jQuery(document).ready(function($){

//Slow Anchor | Smooth scrolling

// Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800);
	    
	    alert('');
    } // End if
  });





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
