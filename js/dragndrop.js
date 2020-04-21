window.addEventListener("load", function() {
	// область, в которой находятся перемещаемые элементы
	let canvas = document.getElementById("canvas");

	// вывод координат над canvas
	canvas.addEventListener('mousemove', function(e) {
		canvas.nextElementSibling.innerText = e.pageX + ";" + e.pageY;
	});

	// при выходе за границы canvas координаты показывать не нужно
	canvas.addEventListener('mouseleave', function(e) {
		canvas.nextElementSibling.innerText = "";
	});
});