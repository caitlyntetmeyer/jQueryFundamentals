// Here's where we'll do the heavy lifting in our app.
var $friends = $('#friends');
var $name = $('#name');
var $age = $('#age');

// Add a variable that will hold a template:
var friendTemplate = "" +
	// Mustache Template:
	"<div class='row'>" +
	"<li>" +
	"<p><strong>Title:</strong> {{name}}</p>" +
	"<p><strong>Author:</strong> {{age}}</p>" +
	"<button id='{{id}}' class='remove'>Remove</button>" +
	"</li>" +
	"<hr>" +
	"</div>";

// Create an addFriend method above the jQuery code:
function addFriend(friend){
	$friends.append(Mustache.render(friendTemplate, friend));
};

// Add the Ajax GET method:
$(document).ready(function(){

	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/learncode/friends',
		success: function(friends) {
			$.each(friends, function(i, friend){
				addFriend(friend);
			});
		},

		error: function(){
			alert('error loading friends');
		}
	});
	$('#add-friend').on('click', function(){

		var friend = {
			name: $name.val(),
			age: $age.val()
		};
		/* 
		AJAX POST method - click the button w/ id add-friend 
		and then pass it to the API
		*/
		$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/learncode/friends',
			data: friend,
			success: function(newFriend){
				addFriend(newFriend);
			},
			error: function(){
				alert('error saving order');
			}
		});
	});
	// .delegate allows you to remove items that were loaded by other students.
	$friends.delegate('.remove', 'click', function(){

		var $li = $(this).closest('li');
		// AJAX DELETE function - click the .remove class button and the id  
		// identifies what to delete
		$.ajax({
			type: "DELETE",
			url: 'http://rest.learncode.academy/api/learncode/friends/' + $(this).attr('id'),
			success: function(){
				$li.fadeOut(300, function(){
					$(this).remove();
				});
			}
		});
	});
});

/* 
Check to make sure that ajax.js is connected:

$(document).ready(function(){
	alert("Hello World");
});
*/













