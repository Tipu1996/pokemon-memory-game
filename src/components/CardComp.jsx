import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

const CardComp = ({ pokemon, displayFunc, shuffleFunc }) => {
	return (
		<Button
			onClick={() => {
				shuffleFunc();
				displayFunc();
			}}
			style={{
				width: "20%",
				height: "30%",
				marginTop: "10%",
			}}>
			<Card>
				<CardMedia
					component="img"
					src={pokemon.url}
					height="20%"
					sx={{ height: 140 }}
					title={pokemon.name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h6" textAlign={"center"}>
						{pokemon.name}
					</Typography>
				</CardContent>
			</Card>
		</Button>
	);
};
export default CardComp;
