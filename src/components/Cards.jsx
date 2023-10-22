import { useEffect, useState } from "react";
import CardComp from "./CardComp";
import axios from "axios";
import { Grid } from "@mui/material";

const Cards = () => {
	const [pokemonData, setPokemonData] = useState([]);

	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
				// console.log("Pokémon Data:", pokemonDataList);
				setPokemonData(pokemonDataList);
			} catch (error) {
				console.error("Error fetching Pokémon data:", error);
			}
		};

		fetchPokemonData();
	}, []);

	const shuffleArray = () => {
		const shuffledArray = [...pokemonData];
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [
				shuffledArray[j],
				shuffledArray[i],
			];
		}
		setPokemonData(shuffledArray);
	};

	const displayData = () => {
		console.log(pokemonData);
	};

	return (
		<Grid container spacing={2}>
			{pokemonData.length === 0 ? (
				<>Loading</>
			) : (
				pokemonData.map((pokemon, index) => (
					<Grid item xs={12} sm={6} md={2} lg={2} key={index}>
						<CardComp
							pokemon={pokemon}
							shuffleFunc={shuffleArray}
							displayFunc={displayData}
						/>
					</Grid>
				))
			)}
		</Grid>
	);
};
export default Cards;
