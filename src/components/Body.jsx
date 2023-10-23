import { Grid, Typography } from "@mui/material";
import Cards from "./Cards";
import ScoreBody from "./ScoreBody";
import { useState } from "react";

const Body = () => {
	const [len, setLen] = useState(0);
	const [clicked, setClicked] = useState([]);

	const pushClicked = (pokemon) => {
		setClicked((prevClicked) => {
			const newClicked = [...clicked, pokemon];
			setLen(newClicked.length);
			console.log(newClicked);
			return newClicked;
		});
	};

	return (
		<Grid container>
			<ScoreBody length={len} />
			<Grid item>
				<Cards pushClicked={pushClicked} />
			</Grid>
		</Grid>
	);
};
export default Body;
