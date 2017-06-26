/*

Traversing the DOM with jQuery Methods

https://www.youtube.com/watch?v=Gq3Aez8sVpM&index=7&list=PL4cUxeGkcC9hNUJ0j6ccnOAcJIPoTRpO4 

.next() method
Grabs an element, then gives us the next element in line in the HTML structure.
*/
$("#contact-methods").next().css({border: "3px solid red"});
// grabs the element w/an id of "contact-methods"; grabs the next element, which in this video is an img; and changes its CSS as indicated

// .prev() method
// Grabs an element, then gives us the previous element in line in the HTML structure.
$("#social-nav").prev().css({border: "3px solid blue"});
// grabs the element w/an id of "social-nav"; grabs the previous element, which in this video is an img; and changes its CSS as indicated

// .parent() method
// Grabs an element, then gives us its parent element.
$(".banner-title").parent().css({border: "3px solid pink"});
// grabs element with "banner-title" class, grabs its parent, changes the parent's CSS

// .parents() method
// Same as above, except you can grab all the parents with the class of "banner-title"!

// .children() method
// Gets all the children of an element
$("#social-nav").children().css({border: "3px solid purple"});
// grabs element w/an id of "social-nav", grabs all its children, and changes the CSS

// .find() method
// Grab an element and find sth within that element
$("#contact").find(".facebook").css({border: "3px solid purple"});
// looks in element w/id of "contact" and finds sth w/class of "facebook", then changes its CSS

// .closest() method
// Move up the DOM to find the closest parent to match whatever element you put in the parentheses after ".closest"
$("#social-nav").closest(".wrapper").css({border: "3px solid orange"});
// grabs element w/id of "social-nav"; moves up the DOM to find the closest parent that has a class of "wrapper"; change its CSS










