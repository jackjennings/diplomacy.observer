const API_URL = "https://sandtable-do.herokuapp.com";
const GAME = "2019-010";
const POWERS = ["Austria-Hungary", "Britain", "France", "Germany", "Italy", "Russia", "Turkey"];

function main() {
	const seasons = document.querySelectorAll("[data-turn]");

	seasons.forEach((season) => {
		const name = season.dataset.turn;
		const endpoint = `${API_URL}/game/${GAME}/season/${name}`;
		
		fetch(endpoint)
			.then((response) => response.json())
			.then((json) => {
				season.innerHTML =
					"\n" +
					POWERS.map((power) => `${power}\n${json[power] || "—"}`).join("\n\n");
			});
	});
}

document.addEventListener("DOMContentLoaded", main);
