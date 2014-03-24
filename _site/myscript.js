$(document).ready(function() {

	$('#content').css('opacity', '0');
	$('#content').css('display', 'block');
	$('#content').hover(function() {
		$('#content').stop().animate({opacity:1}, 'slow');
	}, function() {
		$('#content').stop().animate({opacity:0}, 'slow');

	});

	$('.my-sticky-element').waypoint('sticky');


	$('.dropdownn-toggle').dropdown();


	$('#sometime_in_august').waypoint(function() {
		$('#sometime').toggleClass('highlight');
		
	});

    $('#letters_from_monte').waypoint(function() {
		$('#letters').toggleClass('highlight');
		
	});

	$('#two_lovers').waypoint(function() {
		$('#lovers').toggleClass('highlight');
		
	});

	$('#the_realm').waypoint(function() {
		$('#realm').toggleClass('highlight');
		
	});


    $('#sometime_in_august').waypoint(function() {
        
        $('#mid').toggleClass('showUp')
    });
	

});




