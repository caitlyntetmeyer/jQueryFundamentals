$(document).ready(function(){
// first and last
	$("#example-one li:first").css({border: "2px solid blue"});
	// adds a 2-pixel, solid, blue border around the first list item that has an id of #example-one
	$("#example-one li:last").css({border: "2px solid red"});

// odd and even
	$("#example-two li:odd").css("background-color", "purple");
	$("#example-two li:even").css("background-color", "pink");

// not
	// target all li's inside #not-example except for #list-item-three
	$("#not-example li:not('#list-item-three')").css({border: "4px solid green"});

// less than & greater than
	$("#example-four li:lt(5)").css("background-color", "yellow");
	$("#example-four li:gt(2)").css({border: "2px solid deeppink"});

});