import React from 'react';
import { NavLink, Outlet, useMatch } from 'react-router-dom';

function Products() {
	const matchIndex = useMatch('/products');

	return (
		<div className='products'>
			<div className='productsNav'>
				<NavLink
					to='/products/list'
					className={({ isActive }) => (matchIndex ? 'active' : isActive ? 'active' : '')}
				>
					List
				</NavLink>
				<NavLink to='/products/search'> Search </NavLink>
				<NavLink to='/products/add'> Add </NavLink>
			</div>

			<Outlet />
		</div>
	);
}

export default Products;
