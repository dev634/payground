function loading() {
	const loader = document.getElementById("loader");
	setTimeout(() => {
		loader.classList.add("is-hidden");
	}, 400);
}

window.addEventListener("load", loading);
