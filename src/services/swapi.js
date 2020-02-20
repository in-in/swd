export default class SwapiService {
	apiBase = 'https://swapi.co/api/'

	static extractID(url) {
		const regexp = /\/([0-9]*)\/$/;
		return url.match(regexp)[1];
	}

	static transformPlanet(planet) {
		return {
			'diameter': planet.diameter,
			'id': SwapiService.extractID(planet.url),
			'name': planet.name,
			'population': planet.population,
			'rotationPeriod': planet.rotation_period,
		};
	}

	static transformStarship(starship) {
		return {
			'cargoCapacity': starship.cargo_capacity,
			'costInCredits': starship.cost_in_credits,
			'crew': starship.crew,
			'id': SwapiService.extractID(starship.url),
			'length': starship.length,
			'manufacturer': starship.manufacturer,
			'model': starship.model,
			'name': starship.name,
			'passengers': starship.passengers,
		};
	}

	static transformPerson(person) {
		return {
			'birthYear': person.birth_year,
			'eyeColor': person.eye_color,
			'gender': person.gender,
			'id': SwapiService.extractID(person.url),
			'name': person.name,
		};
	}

	async getResource(url) {
		const res = await fetch(`${this.apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${this.apiBase}${url}, received ${res.status}`);
		}

		return res.json();
	}

	async getAllPeople() {
		const res = await this.getResource('people');
		return res.results.map(SwapiService.transformPerson);
	}

	async getPerson(id) {
		const person = await this.getResource(`people/${id}`);
		return SwapiService.transformPerson(person);
	}

	async getAllPlanets() {
		const res = await this.getResource('planets');
		return res.results.map(SwapiService.transformPlanet);
	}

	async getPlanet(id) {
		const planet = await this.getResource(`planets/${id}`);
		return SwapiService.transformPlanet(planet);
	}

	async getAllStarships() {
		const res = await this.getResource('starships');
		return res.results.map(SwapiService.transformStarship);
	}

	async getStarship(id) {
		const starship = await this.getResource(`starships/${id}`);
		return SwapiService.transformStarship(starship);
	}
}
