$(document).ready(function() {

	// $('#content').css('opacity', '0');
	// $('#content').css('display', 'block');
	// $('#content').hover(function() {
	// 	$('#content').stop().animate({opacity:1}, 'slow');
	// }, function() {
	// 	$('#content').stop().animate({opacity:0}, 'slow');

	// });

	$('.my-sticky-element').waypoint('sticky');


	$('.dropdownn-toggle').dropdown();

	$('.menu-item').each(function() {
		var menuItem = $(this);
		var menuItemId = '#link_to_' + menuItem.attr('id');
		menuItem.waypoint(function() {
			$('.highlight').removeClass('highlight');
			$(menuItemId).addClass('highlight');
		});
	});

	$('.remove-highlight').waypoint(function() {
		$('.highlight').removeClass('highlight');
	});

	// $('#sometime_in_august').waypoint(function() {
	// 	$('.highlight').removeClass('highlight');
	// 	$('#link_to_sometime').addClass('highlight');
		
	// });

 //    $('#letters_from_monte').waypoint(function() {
 //    	$('.highlight').removeClass('highlight');
	// 	$('#link_to_letters').addClass('highlight');
		
	// });

	// $('#two_lovers').waypoint(function() {
	// 	$('.highlight').removeClass('highlight');
	// 	$('#link_to_lovers').addClass('highlight');
		
	// });

	// $('#the_realm').waypoint(function() {
	// 	$('.highlight').removeClass('highlight');
	// 	$('#link_to_realm').addClass('highlight');
		
	// });


    // $('#sometime_in_august').waypoint(function() {
    //     // $('.highlight').removeClass('highlight');
    //     $('#mid').addClass('showUp')
    // });
	

});




