function loading() {
	const loader = document.getElementById("loader");
	setTimeout(() => {
		loader.classList.add("is-hidden");
	}, 200);
}

window.addEventListener("load", loading);
