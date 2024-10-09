let caret = document.getElementById("nav-menu-icon");
caret.addEventListener("click", () => {
	caret.lastElementChild.classList.toggle("fa-angle-down");
	caret.lastElementChild.classList.toggle("fa-angle-up");
});
