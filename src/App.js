import { Outlet, NavLink } from 'react-router-dom';

import './App.css';

export const App = () => {
	return (
		<>
			<header>
				<nav>
					<NavLink to='/'> Home </NavLink>
					<NavLink to='login'> Login </NavLink>
					<NavLink to='products'> Products </NavLink>
				</nav>
				<Outlet />
			</header>
		</>
	);
};

export default App;
