/* eslint-disable camelcase */
export class SwapiService {
	apiBase = 'https://swapi.dev/api/'

	imageBase = 'https://starwars-visualguide.com/assets/img/'

	static extractID(url) {
		const regexp = /\/([0-9]*)\/$/;
		return url.match(regexp)[1];
	}

	static transformPlanet = ({
		diameter, url, name, population, rotation_period,
	}) => ({
		'diameter': diameter,
		'id': SwapiService.extractID(url),
		'name': name,
		'population': population,
		'rotationPeriod': rotation_period,
	})

	static transformStarship = ({
		cargo_capacity,
		cost_in_credits,
		crew,
		url,
		length,
		manufacturer,
		model,
		name,
		passengers,
	}) => ({
		'cargoCapacity': cargo_capacity,
		'costInCredits': cost_in_credits,
		'crew': crew,
		'id': SwapiService.extractID(url),
		'length': length,
		'manufacturer': manufacturer,
		'model': model,
		'name': name,
		'passengers': passengers,
	})

	static transformPerson = ({
		birth_year,
		eye_color,
		gender,
		url,
		name,
	}) => ({
		'birthYear': birth_year,
		'eyeColor': eye_color,
		'gender': gender,
		'id': SwapiService.extractID(url),
		'name': name,
	})

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
		const planet = await this.getResource(`planets/${id}/`);
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
