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

	// выполнить перемещение в заданные координаты
	function moveAt(elem, x, y) {
		if(!elem) return;
		let targetX = x - elem.clientWidth / 2;
		let targetY = y - elem.clientHeight / 2;
		elem.style.left = targetX + "px";
		elem.style.top = targetY + "px";
	};

	// коллекция элементов, которые перемещаем
	let draggables = document.getElementsByClassName("draggable");
	// настраиваем каждый элемент коллекции
	for (let i = 0; i < draggables.length; i++) {
		// перемещаем в случайные координаты
		let randomX = Math.random() * (canvas.clientWidth - draggables[i].clientWidth);
		let randomY = Math.random() * (canvas.clientHeight - draggables[i].clientHeight);
		moveAt(draggables[i], randomX, randomY);
		// задаем оттенок цвета по номеру
		let color = i * (255 / (draggables.length - 1));
		// от синего до белого
		draggables[i].style.backgroundColor = `rgb(${color},${color},255)`;
	}

});