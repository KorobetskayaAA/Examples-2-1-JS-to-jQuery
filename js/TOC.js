let toc = {
	"Introduction": "intro.html",
	"Chapter 1. HTML": {
		"HTML Basics": "article1.html",
		"Common Tags": {
		    "Headings": "article1.html",
		    "Links": "article1.html",
		    "Images": "article1.html",
		    "Lists": "article1.html",
			"Tables": "article1.html"
		},
		"Understanding": {
		    "Block & Inline elements": "article1.html",
		    "Attributes": "article1.html",
		    "Id's & Classes": "article1.html",
		    "Checking browser support": "article1.html"
		},
		"HTML5": "article.html"
	},
	"Chapter 2. CSS": {
		"Adding CSS to a page": "article2.html",
		"Selectors": "article2.html",
		"Properties": "article2.html",
		"Transitionss & Animatiom": "article2.html"
	},
	"Chapter 3. JavaScript": {
		"Adding JavaScript to a page": "article3.html",
		"Basic Syntax": "article3.html",
		"DOM": "article3.html",
		"Functions": "article3.html"
	},
	"Conclusion": "conclus.html",
	"Sources": "sources.html"
};

window.addEventListener("load", function() {
	let menuRoot = document.querySelector(".menu");

	displayTOC(menuRoot, toc);

	function displayTOC(root, structure) {
		if (!root || !structure) return;
		let menuNode = document.createElement("ol");

		for (let item in structure) {
			let itemNode = document.createElement("li");
			itemNode.innerText = item;
			menuNode.append(itemNode);
			if (typeof(structure[item]) == "object") {
				displayTOC(menuNode, structure[item]);
			}
			else {
				itemNode.innerHTML = `<a href=${structure[item]}>${itemNode.innerHTML}</a>`;
			}
		}
		
		root.append(menuNode);
	}
});