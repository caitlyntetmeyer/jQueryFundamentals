/*

jQuery Filters

https://www.youtube.com/watch?v=jiOZCNY4gQM&list=PL4cUxeGkcC9hNUJ0j6ccnOAcJIPoTRpO4&index=6 

filters - refine selectors to get the exact elements you require

jQuery first and last Filters
Target the header > nav > li > first item and add the CSS specified:
*/
$("header nav li:first").css({border: "2px solid red"});

// Target the header > nav > li > last item and add the CSS specified:
$("header nav li:last").css({border: "2px solid red"});

// jQuery first-child and last-child Filters
// Target id contact > ul > first child of section and add the CSS specified:
$("contact ul:first-child").css({border: "2px solid red"});

// Target id contact > ul > last child of section and add the CSS specified:
$("contact ul:last-child").css({border: "2px solid red"});

// jQuery even Filter
// Target header > nav > li > even (by 0-index - so 0, 2, 4, etc.) and add the CSS specified:
$("header nav li:even").css({border: "2px solid blue"});

// jQuery odd Filter
// Target header > nav > li > odd (using 0-index) and add the CSS specified:
$("header nav li:odd").css({border: "2px solid yellow"});

// jQuery not Filter
// Target section > not with an id of contact and add the CSS specified:
$("section:not('#contact')").css({border: "2px solid green"});
// Notice the single quotes!

// jQuery less than Filter
// Target social-nav > li's less than 3 (using zero-index, so 0, 1 and 2) and add the CSS specified:
$("social-nav li:lt(3)").css({border: "2px solid blue"});

// jQuery greater than Filter
// Target social-nav > li's greater than 2 (using zero-index, so 3, 4, etc.) and add the CSS specified:
$("social-nav li:gt(2)").css({border: "2px solid blue"});

/*
jQuery attribute Filters
Syntax: element[attributeName]
Target all the divs that have a class - any class - and add the CSS specified:
*/
$("div[class]").css({border: "2px solid pink"});
// Target all the images that have an alt attribute and add the CSS specified:
$("img[alt]").css({border: "2px solid pink"});
// Target all the images that have an alt attribute called "quote" and add the CSS specified:
$("img[alt=quote]").css({border: "2px solid purple"});








