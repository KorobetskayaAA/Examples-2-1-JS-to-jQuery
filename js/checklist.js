window.addEventListener('load', function() {
	let checklists = document.querySelectorAll(".checklist");

	for (let i = 0; i < checklists.length; i++) {
		let checkboxes = checklists[i].querySelectorAll("input[type='checkbox']");

		let buttonCheckAll = document.createElement("button");
		buttonCheckAll.name = "checkAll";
		buttonCheckAll.innerText = "отметить все";	
		buttonCheckAll.addEventListener('click', () => {
			checkboxes.forEach((checkbox) => checkbox.checked = true);
		});

		let buttonCheckNone = document.createElement("button");
		buttonCheckNone.name = "checkNone";
		buttonCheckNone.innerText = "снять все";
		buttonCheckNone.addEventListener('click', () => {
			checkboxes.forEach((checkbox) => checkbox.checked = false);
		});

		let buttonCheckToggle = document.createElement("button");
		buttonCheckToggle.name = "checkToggle";
		buttonCheckToggle.innerText = "перевернуть";
		buttonCheckToggle.addEventListener('click', () => {
			checkboxes.forEach((checkbox) => checkbox.checked = !checkbox.checked);
		});

		let panelCheck = document.createElement("div");
		panelCheck.classList.add("panel");
		panelCheck.append(buttonCheckAll, buttonCheckNone, buttonCheckToggle);

		checklists[i].prepend(panelCheck);
	}
});