import React, { Fragment } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Header from './Composents/Header';
import List from './List';
import Personality from './Personality';
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route index element={<Home />} />
				<Route path="/list" element={<List />} />
				<Route path="/list/:id" element={<Personality />} />
			</Routes>
		</AnimatePresence>
	);
}

export default App;
