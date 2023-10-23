import { Typography, IconButton, Grid } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ScoreBody = ({ length, theme, changeTheme }) => {
	return (
		<>
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				marginTop="2%">
				<Grid item xs={11}>
					<Typography
						variant="h3"
						style={{
							textDecoration: "underline",
							textAlign: "center",
							marginLeft:"10%"
						}}>
						PokeMon Memory Game
					</Typography>
				</Grid>
				<Grid item xs={1} container justifyContent="flex-end">
					<IconButton
						aria-label="delete"
						onClick={() => changeTheme()}>
						{theme === "light" ? (
							<Brightness4Icon />
						) : (
							<Brightness7Icon />
						)}
					</IconButton>
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
