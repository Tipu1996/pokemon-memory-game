import { Grid } from "@mui/material";
import CardComp from "./CardComp";
import Cards from "./Cards";

const Body = () => {
	return (
		<Grid container justifyContent={"center"}>
			<Grid item>
				<Cards />
			</Grid>
		</Grid>
	);
};
export default Body;
