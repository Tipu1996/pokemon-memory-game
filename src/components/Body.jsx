import { Grid } from "@mui/material";
import Cards from "./Cards";
import ScoreBody from "./ScoreBody";
import { useState } from "react";

const Body = ({ theme, changeTheme }) => {
	const [len, setLen] = useState(0);
	const [clicked, setClicked] = useState([]);

	const pushClicked = (pokemon) => {
		setClicked((prevClicked) => {
			if (!prevClicked.includes(pokemon)) {
				const newClicked = [...prevClicked, pokemon];
				if (newClicked.length === 12) {
					setLen(0);
					window.alert(
						`Congratulation ! you have tapped all 12 pokemons, you win the game`
					);
					return [];
				}
				setLen(newClicked.length);
				console.log(newClicked);
				return newClicked;
			} else {
				window.alert(
					`Wrong ! you clicked ${pokemon} twice, restarting game`
				);
				const newClicked = [];
				setLen(newClicked.length);
				console.log(newClicked);
				return newClicked;
			}
		});
	};

	return (
		<Grid container>
			<ScoreBody length={len} theme={theme} changeTheme={changeTheme} />
			<Cards pushClicked={pushClicked} />
		</Grid>
	);
};
export default Body;
