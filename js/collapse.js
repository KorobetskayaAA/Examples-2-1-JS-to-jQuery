window.addEventListener("load", function () {

	let collapses = document.getElementsByClassName('collapse');

	for (let i = 0; i < collapses.length; i++) {
		let header = collapses[i].getElementsByTagName("h3")[0];
		let article = collapses[i].getElementsByTagName("article")[0];

		article.classList.add("hidden");

		header.addEventListener('click', function() {
			article.classList.toggle("hidden");
		});
	}
});
