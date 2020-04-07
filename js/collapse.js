window.addEventListener("load", function () {

	let collapses = document.getElementsByClassName('collapse');

	for (let i = 0; i < collapses.length; i++) {
		let header = collapses[i].getElementsByTagName("h3")[0];
		let article = collapses[i].getElementsByTagName("article")[0];

		header.addEventListener('click', function() {
			if (article.style.display == 'none') {
				article.style.display = 'block';
			}
			else {
				article.style.display = 'none';
			}
		});
	}
});
