import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Header from './Composents/Header';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
