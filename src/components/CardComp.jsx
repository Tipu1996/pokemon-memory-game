import { AdsClickRounded } from "@mui/icons-material";
import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

const CardComp = ({ pokemon, displayFunc, shuffleFunc, pushClicked }) => {
	return (
		<Button
			onClick={() => {
				shuffleFunc();
				// displayFunc();
				pushClicked(pokemon.name);
			}}
			style={{
				width: "100%",
				height: "100%",
				marginTop: "10%",
			}}>
			<Card
				style={{
					width: "100%",
					height: "100%",
				}}>
				<CardMedia
					component="img"
					src={pokemon.url}
					height={"80%"}
					title={pokemon.name}
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="h6"
						textAlign={"center"}
						height={"20%"}>
						{pokemon.name}
					</Typography>
				</CardContent>
			</Card>
		</Button>
	);
};
export default CardComp;
