import { useEffect, useState } from "react";
import CardComp from "./CardComp";
import axios from "axios";
import { Grid, Typography } from "@mui/material";

const Cards = ({ pushClicked }) => {
	const [pokemonData, setPokemonData] = useState([]);

	useEffect(() => {
		const getRandomDistinctNumbers = () => {
			const distinctNumbers = [];
			while (distinctNumbers.length < 12) {
				const randomNum = Math.floor(Math.random() * 151) + 1; // Assuming you want numbers between 1 and 151
				if (!distinctNumbers.includes(randomNum)) {
					distinctNumbers.push(randomNum);
				}
			}
			return distinctNumbers;
		};

		const shuffledNumbers = getRandomDistinctNumbers();

		const fetchPokemonData = async () => {
			try {
				const pokemonDataPromises = shuffledNumbers.map(
					async (index) => {
						const tenPokemon = await axios.get(
							`https://pokeapi.co/api/v2/pokemon/${index}`
						);
						return {
							name: tenPokemon.data.name,
							url: tenPokemon.data.sprites.front_default,
						};
					}
				);

				const pokemonDataList = await Promise.all(pokemonDataPromises);
				const shuffledArray = [...pokemonDataList];
				for (let i = shuffledArray.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[shuffledArray[i], shuffledArray[j]] = [
						shuffledArray[j],
						shuffledArray[i],
					];
				}
				console.log("Pokémon Data:", shuffledArray);
				setPokemonData(shuffledArray);
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

	return (
		<Grid container marginTop={"4%"} justifyContent={"center"}>
			{pokemonData.length === 0 ? (
				<Typography variant="h4" textAlign={"center"}>
					Loading
				</Typography>
			) : (
				pokemonData.map((pokemon, index) => (
					<Grid item xs={6} sm={4} md={2} lg={2} key={index}>
						<CardComp
							pokemon={pokemon}
							shuffleFunc={shuffleArray}
							pushClicked={pushClicked}
						/>
					</Grid>
				))
			)}
		</Grid>
	);
};
export default Cards;
