import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

const CardComp = ({ pokemon, shuffleFunc, pushClicked }) => {
	return (
		<Button
			onClick={() => {
				shuffleFunc();
				pushClicked(pokemon.name);
			}}
			style={{
				width: "100%",
				height: "100%",
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
