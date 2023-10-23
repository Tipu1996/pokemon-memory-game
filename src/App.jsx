import { lightThemeOptions, darkThemeOptions } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Body from "./components/Body";

const App = () => {
	const [theme, setTheme] = useState("dark");

	const changeTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<ThemeProvider
			theme={theme === "light" ? lightThemeOptions : darkThemeOptions}>
			<CssBaseline />
			<Body theme={theme} changeTheme={changeTheme} />
		</ThemeProvider>
	);
};

export default App;
