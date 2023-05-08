import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import PSets from './pages/pSets';
import PSetDatabase from './pages/pSetDatabase';
import TopAppBar from './components/TopAppBar';


function App() {
	return (
		<Router>
			<TopAppBar/>
			<Routes>
				<Route exact_path='/' exact element={<Home />} />
				<Route path='/psets' element={<PSets />} />
				<Route path='/pset-database' element={<PSetDatabase />} />
			</Routes>
		</Router>
	);
}

export default App;
