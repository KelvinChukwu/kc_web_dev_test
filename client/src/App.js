import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import PSets from './pages/pSets';
import PSetDatabase from './pages/pSetDatabase';


function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact_path='/' exact element={<Home />} />
				<Route path='/psets' element={<PSets />} />
				<Route path='/pset-database' element={<PSetDatabase />} />
			</Routes>
		</Router>
	);
}

export default App;
