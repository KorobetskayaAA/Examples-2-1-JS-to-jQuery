window.addEventListener('load', function() {
	let time = 15;
	let linkBox = document.getElementById("linkBox");
	let timeNode = linkBox.getElementsByClassName("timer")[0];

	updateTimer();

	function updateTimer() {
		if (time >= 0) {
			timeNode.innerText = time;
			setTimeout(updateTimer, 1000);
		}
		else {
			linkBox.innerHTML = '<a href="index.html">Ссылка для скачивания файла</a>';
		}
		time--;
	};
});