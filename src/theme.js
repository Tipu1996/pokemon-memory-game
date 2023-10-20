// Light Theme

import { createTheme } from "@mui/material";

export const lightThemeOptions = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#3f51b5",
		},
		secondary: {
			main: "#f50057",
		},
	},
});

// Dark Theme

export const darkThemeOptions = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#3f51b5",
		},
		secondary: {
			main: "#f50057",
		},
	},
});
