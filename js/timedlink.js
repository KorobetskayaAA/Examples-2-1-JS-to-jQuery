$(document).ready(function() {
	let time = 15;

	updateTimer();

	function updateTimer() {
		if (time >= 0) {
			$(".timer").html(time);
			setTimeout(updateTimer, 1000);
		}
		else {
			$("#linkBox").html('<a href="index.html">Ссылка для скачивания файла</a>');
		}
		time--;
	}
});