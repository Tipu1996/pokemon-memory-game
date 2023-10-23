import { Grid, Typography } from "@mui/material";

const ScoreBody = ({ length }) => {
	return (
		<>
			<Grid
				container
				justifyContent={"center"}
				alignItems={"center"}
				marginTop={"2%"}>
				<Grid item textAlign={"center"}>
					<Typography
						variant="h3"
						style={{ textDecoration: "underline" }}>
						PokeMon Memory Game
					</Typography>
				</Grid>
			</Grid>
			<Grid container justifyContent={"space-evenly"} marginTop={"2%"}>
				<Grid item>
					<Typography variant="h5">
						Tap as many Pokemons as you can without tapping the same
						one twice
					</Typography>
				</Grid>
				<Grid item>
					<Typography
						variant="h5"
						style={{ textDecoration: "underline" }}>
						Score: {length}
					</Typography>
				</Grid>
			</Grid>
		</>
	);
};
export default ScoreBody;
