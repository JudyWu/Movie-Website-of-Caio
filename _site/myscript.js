$(document).ready(function() {
	$('.my-sticky-element').waypoint('sticky');

	$('#picture1').waypoint(function() {
		$('#flower').toggleClass('highlight');
	});

    $('#picture2').waypoint(function() {
		$('#river').toggleClass('highlight');
	});

	$('#picture3').waypoint(function() {
		$('#fire_fly').toggleClass('highlight');
	});

	$('#picture4').waypoint(function() {
		$('#sea_side').toggleClass('highlight');
	});
	
});




