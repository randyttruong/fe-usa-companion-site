import { Stack, ThemeProvider } from '@mui/material/';
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";
import theme from './theme';

function App() {

	return (
		<ThemeProvider theme={theme}>
			<Stack sx={{ minHeight: "100vh" }} justifyContent="space-between">
				<Routes>
					<Route index  element={<HomePage />} />
				</Routes>
			</Stack>
		</ThemeProvider>
	);
}

export default App;
