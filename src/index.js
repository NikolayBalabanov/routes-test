import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './components/router';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<AppRouter />
	</BrowserRouter>
);
