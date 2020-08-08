function loading() {
	const title = document.querySelector("main h2");

	const path = window.location.pathname;
	const page = path.split("/").pop();
	switch (page) {
		case "index.html":
			const loader = document.getElementById("loader");
			loader.classList.add("is-hidden");
			break;
		case "page-2.html":
			const loader2 = document.getElementById("loader");
			loader2.classList.add("is-hidden-left");
			break;
	}
	title.textContent += " Bienvenue sur " + page;
}

window.addEventListener("DOMContentLoaded", loading);
