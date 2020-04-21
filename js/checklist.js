window.addEventListener('load', function() {
	let checklists = document.querySelectorAll(".checklist");

	for (let i = 0; i < checklists.length; i++) {
		let checkboxes = checklists[i].querySelectorAll("input[type='checkbox']");

		let buttonCheckAll = checklists[i].querySelector('button[name="checkAll"]');
		buttonCheckAll.addEventListener('click', () => {
			checkboxes.forEach((checkbox) => checkbox.checked = true);
		});

		let buttonCheckNone = checklists[i].querySelector('button[name="checkNone"]');
		buttonCheckNone.addEventListener('click', () => {
			checkboxes.forEach((checkbox) => checkbox.checked = false);
		});

		let buttonCheckToggle = checklists[i].querySelector('button[name="checkToggle"]');
		buttonCheckToggle.addEventListener('click', () => {
			checkboxes.forEach((checkbox) => checkbox.checked = !checkbox.checked);
		});
	}
});