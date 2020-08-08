function loading() {
	const title = document.querySelector("main h2");
	let loader = "";
	const path = window.location.pathname;
	const page = path.split("/").pop();
	switch (page) {
		case "":
			loader = document.getElementById("loader");
			setTimeout(function () {
				loader.classList.add("is-hidden");
			}, 100);

			break;
		case "index.html":
			loader = document.getElementById("loader");
			setTimeout(function () {
				loader.classList.add("is-hidden");
			}, 100);
			break;
		case "page-2.html":
			loader = document.getElementById("loader");
			loader.classList.add("is-hidden-left");
			break;
		default:
			alert("something wrong ....");
			break;
	}
	title.textContent += " Bienvenue sur " + page;
}

window.addEventListener("DOMContentLoaded", loading);
