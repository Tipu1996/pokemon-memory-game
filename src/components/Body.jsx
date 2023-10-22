import { Grid } from "@mui/material";
import CardComp from "./CardComp";
import Cards from "./Cards";

const Body = () => {
	return (
		<Grid container justifyContent={"center"}>
			<Grid
				item
				xs={10}
				md={7}
				textAlign={"center"}
				marginTop={"4%"}
				justifyContent={"space-evenly"}>
				<Cards />
			</Grid>
		</Grid>
	);
};
export default Body;
