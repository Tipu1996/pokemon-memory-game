import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

const CardComp = ({ pokemon }) => {
	return (
		<Button
			onClick={() => {
				console.log(pokemon.name);
			}}>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component="img"
					src={pokemon.url}
					height="100px"
					sx={{ height: 140 }}
					title={pokemon.name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{pokemon.name}
					</Typography>
				</CardContent>
			</Card>
		</Button>
	);
};
export default CardComp;
