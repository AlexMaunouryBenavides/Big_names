import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import './index.css';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Routes,
	useParams,
	createRoutesFromElements,
	useLocation,
	BrowserRouter,
	Router,
} from 'react-router-dom';
import Header from './Composents/Header';
import List from './List';
import Personality from './Personality';
import App from './App';

/* const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<App />
		</>
	)
); */

/* ReactDOM.createRoot(document.getElementById('root')).render(
	
); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/*" element={<App />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
