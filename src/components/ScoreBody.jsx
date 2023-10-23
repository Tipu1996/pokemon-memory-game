import { Grid, Typography } from "@mui/material";

const ScoreBody = ({ length }) => {
	return (
		<Grid
			container
			justifyContent={"space-between"}
			alignItems={"center"}
			marginY={"2%"}>
			<Grid item>
				<Typography variant="h5">
					Tap on as many Pokemons as you can without tapping on the
					same one twice
				</Typography>
			</Grid>
			<Grid item marginRight={"3%"}>
				<Grid
					container
					flexDirection={"column"}
					justifyContent={"center"}
					alignItems={"center"}>
					<Typography variant="h6">Score: {length}</Typography>
					<Typography variant="h6">Score:</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};
export default ScoreBody;
