$(document).ready(function(){
	var API_KEY = '09a4d2c505cd4ccfbaa74f8ed120dc14';
	$.ajax({
		// What do we want to do? Get data!
		type: 'GET',
		// Data from this url (JSON data from an API):
		url:'https://newsapi.org/v1/articles?source=the-wall-street-journal&sortBy=top&apiKey='
		  + API_KEY,		
	})	// no semicolon
	// deferred promise:
		.done(function(data){
			$.each(data.articles, function(i,key){
			console.log(key.author);
			})	// no semicolon because we're gonna do another deferred promise
		})
	// another deferred promise:
		.fail(function(){
			alert("Hey man, the server messed up...");
		})


	console.log("Heey you guuuys!");
});

/* download postman,
		success: function(data){
			 console.log(data.results[0].name);	// gets the 1st name
		},
		error:function(){
			alert("error loading data");
		}
		// use .done and .fail
	})
});
*/