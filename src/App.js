import "./App.css";
import Navbar from "./components/Navbars/IndexNavbar";
import PageHeader from "./components/PageHeader/PageHeader"
import {BrowserRouter as Router} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar/>
				<PageHeader/>																																
			</Router>
		</div>
	);
}
export default App;