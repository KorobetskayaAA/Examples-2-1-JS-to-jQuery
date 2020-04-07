$(document).ready(function() {
	$(".collapse>article").hide();
	$(".collapse>h3").click(function() {
		$(this).toggleClass("expanded");
		$(this).next("article").slideToggle(500);
	});
});