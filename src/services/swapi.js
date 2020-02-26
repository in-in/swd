export default class SwapiService {
	apiBase = 'https://swapi.co/api/'

	imageBase = 'https://starwars-visualguide.com/assets/img/'

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

	getResource = async (url) => {
		const res = await fetch(`${this.apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${this.apiBase}${url}, received ${res.status}`);
		}

		return res.json();
	}

	getAllPeople = async () => {
		const res = await this.getResource('people');
		return res.results.map(SwapiService.transformPerson);
	}

	getPerson = async (id) => {
		const person = await this.getResource(`people/${id}`);
		return SwapiService.transformPerson(person);
	}

	getPersonImage = ({ id }) => `${this.imageBase}characters/${id}.jpg`

	getAllPlanets = async () => {
		const res = await this.getResource('planets');
		return res.results.map(SwapiService.transformPlanet);
	}

	getPlanet = async (id) => {
		const planet = await this.getResource(`planets/${id}`);
		return SwapiService.transformPlanet(planet);
	}

	getPlanetImage = ({ id }) => `${this.imageBase}planets/${id}.jpg`

	getAllStarships = async () => {
		const res = await this.getResource('starships');
		return res.results.map(SwapiService.transformStarship);
	}

	getStarship = async (id) => {
		const starship = await this.getResource(`starships/${id}`);
		return SwapiService.transformStarship(starship);
	}

	getStarshipImage = ({ id }) => `${this.imageBase}starships/${id}.jpg`
}
