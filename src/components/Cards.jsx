import { useEffect, useState } from "react";
import CardComp from "./CardComp";
import axios from "axios";

const Cards = () => {
	const [pokemonData, setPokemonData] = useState([]);

	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	useEffect(() => {
		const fetchPokemonData = async () => {
			try {
				const pokemonDataPromises = numbers.map(async (index) => {
					const tenPokemon = await axios.get(
						`https://pokeapi.co/api/v2/pokemon/${index}`
					);
					return {
						name: tenPokemon.data.name,
						url: tenPokemon.data.sprites.front_default,
					};
				});

				const pokemonDataList = await Promise.all(pokemonDataPromises);
				console.log("Pokémon Data:", pokemonDataList);
				setPokemonData(pokemonDataList);
			} catch (error) {
				console.error("Error fetching Pokémon data:", error);
			}
		};

		fetchPokemonData();
	}, []);

	return (
		<>
			{pokemonData.length === 0 ? (
				<>Loading</>
			) : (
				pokemonData.map((pokemon, index) => {
					return <CardComp pokemon={pokemon} key={index} />;
				})
			)}
		</>
	);
};
export default Cards;
