$(document).ready(() => {
	$(".checklist").prepend($("<div class='panel'></div>").append(
		$("<button>", {text: "отметить все"}).click(function() { 
			$(this).parents(".checklist").find("input:checkbox").prop("checked", true); 
		}),

		$("<button>", {text: "снять все"}).click(function() { 
			$(this).parents(".checklist").find("input:checkbox").prop("checked", false); 
		}),

		$("<button>", {text: "перевернуть"}).click(function() { 
			$(this).parents(".checklist").find("input:checkbox").prop("checked", 
				function(i, old) {return !old;}); 
		})
	));
});