import { Grid } from "@mui/material";
import CardComp from "./CardComp";
import Cards from "./Cards";

const Body = () => {
	return (
		<Grid container justifyContent={"space-evenly"}>
			{/* <Grid item xs={10} md={5} textAlign={"center"} marginTop={"4%"}>
				First Hello
			</Grid> */}
			<Grid item xs={10} md={1} textAlign={"center"} marginTop={"4%"}>
				<Cards />
			</Grid>
		</Grid>
	);
};
export default Body;
