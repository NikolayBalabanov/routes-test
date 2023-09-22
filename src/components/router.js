import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import { App } from '../App';
import Home from './Home';
import Login from './Login';
import Products from './products/Products';

const ListProducts = lazy(() => import('./products/ListProducts'));
const Search = lazy(() => import('./products/Search'));
const AddProduct = lazy(() => import('./products/AddProduct'));
const ProductDisplay = lazy(() => import('./products/ProductDisplay'));

const suspense = (page, fallback = <div>Loading...</div>) => (
	<Suspense fallback={fallback}>{page}</Suspense>
);
const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'login', element: <Login /> },
			{
				path: 'products',
				element: <Products />,
				children: [
					{
						index: true,
						element: suspense(<ListProducts />),
					},
					{
						path: 'list',
						element: suspense(<ListProducts />),
					},
					{
						path: 'search',
						element: suspense(<Search />),
					},
					{
						path: 'add',
						element: suspense(<AddProduct />),
					},
					{
						path: ':id',
						element: suspense(<ProductDisplay />),
					},
					{
						path: '*',
						element: <div>Страница в продуктс не найдена</div>,
					},
				],
			},
			{ path: '*', element: <h1>ТАкой страницы нет</h1> },
		],
	},
];

export const AppRouter = () => useRoutes(routes);
