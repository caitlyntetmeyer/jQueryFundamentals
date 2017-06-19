$(function(){
	// By id - this adds a CSS class:
	$('#example-one').addClass('highlight');

	// By class - we'll make two things change here:
	$('.example-two').css('border', '4px solid gray');

	// By element:
	$('h5').click(function() {
		$('h5').fadeOut('slow', 'linear');
	});

	// See this URL for the draggable interaction: https://jqueryui.com/draggable/
	// To make something draggable: $('#draggable').draggable();
	$('#id-combo-demo, .class-combo-demo, #draggable').draggable();

	// When you click on an li that contains the word "sad," it hides the li you clicked:
	$('li:contains("sad")').click(function() {
		$(this).hide()
	});
});